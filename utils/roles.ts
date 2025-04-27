export function checkRole(role: string): boolean {
    // Replace this with your actual role-checking logic
    const userRoles = ['admin', 'vendor', 'Alumni']; // Example roles
    return userRoles.includes(role);
  }