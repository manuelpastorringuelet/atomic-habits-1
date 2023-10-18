// Function to save data in local storage
export function saveToLocalStorage(key: string, value: string): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, value);
  }
}

// Function to retrieve data from local storage
export function getFromLocalStorage(key: string): string | null {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key);
  }
  return null; // Handle the case when running on the server or other non-browser environments.
}

// Function to remove data from local storage
export function removeFromLocalStorage(key: string): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
}
