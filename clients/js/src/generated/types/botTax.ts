/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Context, Serializer } from '@metaplex-foundation/umi';

/**
 * Guard is used to:
 * * charge a penalty for invalid transactions
 * * validate that the mint transaction is the last transaction
 * * verify that only authorized programs have instructions
 *
 * The `bot_tax` is applied to any error that occurs during the
 * validation of the guards.
 */

export type BotTax = { lamports: bigint; lastInstruction: boolean };

export type BotTaxArgs = {
  lamports: number | bigint;
  lastInstruction: boolean;
};

export function getBotTaxSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<BotTaxArgs, BotTax> {
  const s = context.serializer;
  return s.struct<BotTax>(
    [
      ['lamports', s.u64()],
      ['lastInstruction', s.bool()],
    ],
    { description: 'BotTax' }
  ) as Serializer<BotTaxArgs, BotTax>;
}
