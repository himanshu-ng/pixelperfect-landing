
interface ContactData {
  name: string;
  email: string;
  phone: string;
  company: string;
  cityState: string;
  source?: string;
}

/**
 * Sends contact data to Brevo (Sendinblue) API
 * @param contactData - The contact data to submit
 * @param apiKey - The Brevo API Key
 * @returns Promise resolving to the response data
 */
export const addContactToBrevo = async (contactData: ContactData, apiKey: string): Promise<any> => {
  try {
    // Validate required parameters
    if (!apiKey) {
      throw new Error("Brevo API Key is required");
    }
    
    if (!contactData.email) {
      throw new Error("Email is required");
    }

    // Prepare the request body for Brevo API
    const requestBody = {
      email: contactData.email,
      attributes: {
        FIRSTNAME: contactData.name.split(' ')[0],
        LASTNAME: contactData.name.split(' ').length > 1 ? contactData.name.split(' ').slice(1).join(' ') : '',
        PHONE: contactData.phone,
        COMPANY: contactData.company,
        CITYSTATE: contactData.cityState,
        SOURCE: contactData.source || 'Website'
      },
      listIds: [2], // Default to Real Estate list ID - you can adjust this as needed
      updateEnabled: true // Update contact if already exists
    };

    // Make the API request to Brevo
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': apiKey
      },
      body: JSON.stringify(requestBody)
    });

    // Parse the JSON response
    const data = await response.json();

    // Handle API errors
    if (!response.ok) {
      throw new Error(data.message || 'Failed to add contact to Brevo');
    }

    // Return the successful response data
    return data;
    
  } catch (error) {
    console.error('Brevo API error:', error);
    throw error;
  }
}
