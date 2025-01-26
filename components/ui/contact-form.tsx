'use client'

import React from 'react';
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";

export function ContactForm() {
  const [fields, setFields] = React.useState({
    fullName: '',
    email: '',
    message: ''
  });

  const [formErrors, setFormErrors] = React.useState({
    fullName: '',
    email: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = React.useState<{
    success?: string;
    error?: string;
  }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFields(prev => ({ ...prev, [id]: value }));
  };

  const validateFields = () => {
    const errors = {
      fullName: !fields.fullName ? 'Full name is required' : '',
      email: !fields.email 
        ? 'Email is required' 
        : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(fields.email) 
          ? 'Invalid email address' 
          : '',
      message: !fields.message ? 'Message is required' : ''
    };

    setFormErrors(errors);
    return !Object.values(errors).some(error => error !== '');
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (validateFields()) {
      try {
        // Replace with actual submission logic (e.g., API call)
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(fields)
        });

        if (response.ok) {
          setSubmitStatus({ 
            success: 'Your message has been sent successfully!' 
          });
          // Reset form
          setFields({ fullName: '', email: '', message: '' });
        } else {
          setSubmitStatus({ 
            error: 'Failed to send message. Please try again.' 
          });
        }
      } catch (error) {
        setSubmitStatus({ 
          error: 'An error occurred. Please try again later.' 
        });
      }
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              value={fields.fullName}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full"
            />
            {formErrors.fullName && (
              <p className="text-sm text-red-500">{formErrors.fullName}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={fields.email}
              onChange={handleChange}
              placeholder="Your email"
              className="w-full"
            />
            {formErrors.email && (
              <p className="text-sm text-red-500">{formErrors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              value={fields.message}
              onChange={handleChange}
              placeholder="Your message"
              className="w-full"
              rows={4}
            />
            {formErrors.message && (
              <p className="text-sm text-red-500">{formErrors.message}</p>
            )}
          </div>

          <Button type="submit" className="w-full">
            Send Message <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>

        {submitStatus.success && (
          <Alert className="mt-4">
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>{submitStatus.success}</AlertDescription>
          </Alert>
        )}

        {submitStatus.error && (
          <Alert className="mt-4" variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{submitStatus.error}</AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}