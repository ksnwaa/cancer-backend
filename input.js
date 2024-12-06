import ClientError from './client.js';

class InputError extends ClientError {
  constructor(message) {
    super(message, 400);
    this.name = 'InputError';
  }
}

export default InputError;