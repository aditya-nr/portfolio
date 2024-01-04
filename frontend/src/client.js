const PROJECT_ID = "5ecogotz";
const DB = "production";

import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
    projectId: PROJECT_ID,
    dataset: DB,
    useCdn: true
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
export default client