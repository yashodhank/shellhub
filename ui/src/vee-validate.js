import { required, integer, email } from 'vee-validate/dist/rules';
import { extend } from 'vee-validate';
import isValidHostname from 'is-valid-hostname';

extend('required', {
  ...required,
  message: 'This field is required',
});

extend('integer', {
  ...integer,
  message: 'This value must be a integer number',
});

extend('email', {
  ...email,
  message: 'This field must be a valid email',
});

extend('rfc1123', {
  validate: (value) => isValidHostname(value),
  message: 'You entered an invalid RFC1123 hostname',
});

extend('password', (value) => {
  if (value.length < 5 || value.length > 30) {
    return 'Your password should be 5-30 characters long';
  }
  return true;
});
