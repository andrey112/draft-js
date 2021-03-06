/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DraftBlockTag
 * @flow
 */

'use strict';

/**
 * The list of default valid block tags.
 */
export type DraftBlockTag = (
  'div' |
  'p' |
  'h1' |
  'h2' |
  'h3' |
  'h4' |
  'h5' |
  'h6' |
  'li' |
  'blockquote' |
  'pre' |
  'figure'
);
