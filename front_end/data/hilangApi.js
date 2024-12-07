// frontend/data/hilangApi.js

const baseUrl = 'http://localhost:3000/api/orang_hilang';

// Fetch all orang hilang
export const getOrangHilang = async () => {
    try {
        const response = await fetch(`${baseUrl}`);
        if (!response.ok) {
            throw new Error('Failed to fetch orang hilang data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

// frontend/data/hilangApi.js

// Add new orang hilang
export const addOrangHilang = async (orangHilangData) => {
    try {
        const response = await fetch(`${baseUrl}/add`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orangHilangData),
        });
        if (!response.ok) {
            throw new Error('Failed to add orang hilang');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

// frontend/data/hilangApi.js

// Update orang hilang by ID
export const updateOrangHilang = async (id, orangHilangData) => {
    try {
        const response = await fetch(`${baseUrl}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orangHilangData),
        });
        if (!response.ok) {
            throw new Error('Failed to update orang hilang');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

// frontend/data/hilangApi.js

// Delete orang hilang by ID
export const deleteOrangHilang = async (id) => {
    try {
        const response = await fetch(`${baseUrl}/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Failed to delete orang hilang');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};
