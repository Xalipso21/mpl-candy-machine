/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Context, Serializer } from '@metaplex-foundation/umi';

/** Config line settings to allocate space for individual name + URI. */
export type ConfigLineSettings = {
  /** Common name prefix */
  prefixName: string;
  /** Length of the remaining part of the name */
  nameLength: number;
  /** Common URI prefix */
  prefixUri: string;
  /** Length of the remaining part of the URI */
  uriLength: number;
  /** Indicates whether to use a senquential index generator or not */
  isSequential: boolean;
};

export type ConfigLineSettingsArgs = ConfigLineSettings;

export function getConfigLineSettingsSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<ConfigLineSettingsArgs, ConfigLineSettings> {
  const s = context.serializer;
  return s.struct<ConfigLineSettings>(
    [
      ['prefixName', s.string()],
      ['nameLength', s.u32()],
      ['prefixUri', s.string()],
      ['uriLength', s.u32()],
      ['isSequential', s.bool()],
    ],
    { description: 'ConfigLineSettings' }
  ) as Serializer<ConfigLineSettingsArgs, ConfigLineSettings>;
}
