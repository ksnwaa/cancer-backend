import * as tf from '@tensorflow/tfjs-node';

async function loadModel() {
  // URL ke bucket model
  const modelUrl = 'https://storage.googleapis.com/model-cancer-bucket/model.json';

  try {
    console.log(`Loading model from bucket: ${modelUrl}`);
    const model = await tf.loadGraphModel(modelUrl);
    console.log('Model loaded successfully.');
    return model;
  } catch (error) {
    console.error('Error loading model:', error.message || error);
    throw new Error('Failed to load the TensorFlow model from the bucket. Verify the URL and model format.');
  }
}

export { loadModel };