import { serverApi } from '../../api/externals/unsplash';
import { successResponse, errorResponse } from '../helper';

/**
 * search photos
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export default async (req, res)=> {
  try {
    const { query, page, perPage } = req.query;
    const options = {
      query: query,
      page: page || 1,
      perPage: perPage || 100
    }
    const unsplash = serverApi;
    const photos = await unsplash.search.getPhotos(options);
    successResponse(photos.response.results, res);
  } catch(error) {
    errorResponse('Cannot get unsplash photos list', res);
  }
}