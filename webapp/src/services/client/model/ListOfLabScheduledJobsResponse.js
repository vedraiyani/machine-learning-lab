/**
 * ML Lab Service
 * Functionality to create and manage Lab projects, services, datasets, models, and experiments.
 *
 * OpenAPI spec version: 0.2.0-SNAPSHOT
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import LabScheduledJob from './LabScheduledJob';
import UnifiedErrorMessage from './UnifiedErrorMessage';
import ValueListFormatMetadata from './ValueListFormatMetadata';

/**
 * The ListOfLabScheduledJobsResponse model module.
 * @module model/ListOfLabScheduledJobsResponse
 * @version 0.2.0-SNAPSHOT
 */
export default class ListOfLabScheduledJobsResponse {
  /**
   * Constructs a new <code>ListOfLabScheduledJobsResponse</code>.
   * @alias module:model/ListOfLabScheduledJobsResponse
   * @class
   */

  constructor() {}

  /**
   * Constructs a <code>ListOfLabScheduledJobsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListOfLabScheduledJobsResponse} obj Optional instance to populate.
   * @return {module:model/ListOfLabScheduledJobsResponse} The populated <code>ListOfLabScheduledJobsResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ListOfLabScheduledJobsResponse();

      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ValueListFormatMetadata.constructFromObject(
          data['metadata']
        );
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [LabScheduledJob]);
      }
      if (data.hasOwnProperty('errors')) {
        obj['errors'] = UnifiedErrorMessage.constructFromObject(data['errors']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ValueListFormatMetadata} metadata
   */
  metadata = undefined;
  /**
   * @member {Array.<module:model/LabScheduledJob>} data
   */
  data = undefined;
  /**
   * @member {module:model/UnifiedErrorMessage} errors
   */
  errors = undefined;
}
