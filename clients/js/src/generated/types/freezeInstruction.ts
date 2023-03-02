/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Context, Serializer } from '@metaplex-foundation/umi';

export enum FreezeInstruction {
  Initialize,
  Thaw,
  UnlockFunds,
}

export type FreezeInstructionArgs = FreezeInstruction;

export function getFreezeInstructionSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<FreezeInstructionArgs, FreezeInstruction> {
  const s = context.serializer;
  return s.enum<FreezeInstruction>(FreezeInstruction, {
    description: 'FreezeInstruction',
  }) as Serializer<FreezeInstructionArgs, FreezeInstruction>;
}
