'use client'

import React from 'react';
import { useFormFields, useMailChimpForm } from "use-mailchimp-form";
import { Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";

export function EmailForm() {
  const url = "https://computefutures.us8.list-manage.com/subscribe/post?u=65c2aba71bc6d41953c14cc83&amp;id=5a1e70d2cb&amp;f_id=007105e0f0";
  
  const {
    loading,
    error,
    success,
    message,
    handleSubmit: handleMailchimpSubmit
  } = useMailChimpForm(url);

  const { fields, handleFieldChange } = useFormFields({
    EMAIL: "",
    FNAME: "",
    LNAME: "",
  });

  const [formErrors, setFormErrors] = React.useState({
    EMAIL: '',
    FNAME: '',
    LNAME: ''
  });

  const validateFields = () => {
    const errors = {};
    if (!fields.FNAME) errors.FNAME = 'First name is required';
    if (!fields.LNAME) errors.LNAME = 'Last name is required';
    if (!fields.EMAIL) {
      errors.EMAIL = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(fields.EMAIL)) {
      errors.EMAIL = 'Invalid email address';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateFields()) {
      handleMailchimpSubmit(fields);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="FNAME">First name</Label>
              <Input
                id="FNAME"
                value={fields.FNAME}
                onChange={handleFieldChange}
                placeholder="First name"
                className="w-full"
              />
              {formErrors.FNAME && (
                <p className="text-sm text-red-500">{formErrors.FNAME}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="LNAME">Last name</Label>
              <Input
                id="LNAME"
                value={fields.LNAME}
                onChange={handleFieldChange}
                placeholder="Last name"
                className="w-full"
              />
              {formErrors.LNAME && (
                <p className="text-sm text-red-500">{formErrors.LNAME}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="EMAIL">Email</Label>
            <Input
              id="EMAIL"
              type="email"
              value={fields.EMAIL}
              onChange={handleFieldChange}
              placeholder="Email"
              className="w-full"
            />
            {formErrors.EMAIL && (
              <p className="text-sm text-red-500">{formErrors.EMAIL}</p>
            )}
            <p className="text-sm text-muted-foreground">
              No spam emails. You can unsubscribe at any time!
            </p>
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? (
              "Subscribing..."
            ) : (
              <>
                Subscribe <Mail className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>

        {success && (
          <Alert className="mt-4">
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>{message}</AlertDescription>
          </Alert>
        )}

        {error && (
          <Alert className="mt-4" variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{message}</AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}

