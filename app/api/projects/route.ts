// pages/api/airtable/projects.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function GET(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Ensure only GET requests are allowed
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

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
    
    // Return only the records
    res.status(200).json(data.records);
  } catch (error) {
    console.error('Error fetching Airtable projects:', error);
    res.status(500).json({ message: 'Error fetching projects', error: error instanceof Error ? error.message : 'Unknown error' });
  }
}