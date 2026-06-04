import { Profile } from '../types/profile';
import { shubhamProfile } from './profiles/shubham'; // Corrected to .tsx
import { himaniProfile } from './profiles/himani';   // Corrected to .tsx

/**
 * A map of available profiles, keyed by their identifier.
 * To add a new profile:
 * 1. Create a new file in `src/data/profiles/` (e.g., `src/data/profiles/new_profile.tsx`).
 * 2. Define and export a `Profile` object in that file (e.g., `export const newProfile: Profile = { ... };`).
 * 3. Import the new profile here.
 * 4. Add it to the `profileMap` below with a unique key.
 */
const profileMap: { [key: string]: Profile } = {
  shubham: shubhamProfile,
  himani: himaniProfile,
  // Add future profiles here:
  // new_profile: newProfile,
};

// Determine which profile to load based on the NEXT_PUBLIC_PORTFOLIO environment variable.
// Defaults to 'shubhamProfile' if the environment variable is not set or is invalid.
const selectedProfileKey = process.env.NEXT_PUBLIC_PORTFOLIO?.toLowerCase();

export const profile: Profile =
  profileMap[selectedProfileKey as keyof typeof profileMap] || shubhamProfile;

// Optional: Log which profile is being used for debugging purposes
if (process.env.NODE_ENV === 'development') {
  const loadedProfileName = Object.keys(profileMap).find(key => profileMap[key] === profile);
  console.log(`Loading portfolio for: ${loadedProfileName || 'shubham (default)'}`);
}
