/*!
 * Brackets WebP
 *
 * @author John Smith
 * @license http://opensource.org/licenses/MIT
 */


/*jslint vars: true, plusplus: true, nomen: true, regexp: true, maxerr: 50 */
/*global define, brackets */

define(function (require, exports, module) {
  'use strict';

  var AppInit = brackets.getModule('utils/AppInit');
  var LanguageManager = brackets.getModule('language/LanguageManager');

  AppInit.appReady(function () {
      LanguageManager.getLanguage('image').addFileExtension('webp');
  });
});
