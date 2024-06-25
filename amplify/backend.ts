import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource'; // Ensure this file has only one defineData call

defineBackend({
  auth,
  data, // Only one defineData call should be present here
});
