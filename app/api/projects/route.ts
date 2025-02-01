import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Replace with your actual Airtable API key and base ID
    const response = await fetch(
      'https://api.airtable.com/v0/app2gyfz7JI7Qteps/tblrdt4ydz7YxcmPf', 
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch Airtable data');
    }

    const data = await response.json();
    
    // Return the records using NextResponse
    return NextResponse.json(data.records);
  } catch (error) {
    console.error('Error fetching Airtable projects:', error);
    return NextResponse.json(
      { 
        message: 'Error fetching projects', 
        error: error instanceof Error ? error.message : 'Unknown error' 
      }, 
      { status: 500 }
    );
  }
}