/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Context, Option, Serializer } from '@metaplex-foundation/umi';
import {
  AddressGate,
  AddressGateArgs,
  Allocation,
  AllocationArgs,
  AllowList,
  AllowListArgs,
  BotTax,
  BotTaxArgs,
  EndDate,
  EndDateArgs,
  FreezeSolPayment,
  FreezeSolPaymentArgs,
  FreezeTokenPayment,
  FreezeTokenPaymentArgs,
  Gatekeeper,
  GatekeeperArgs,
  MintLimit,
  MintLimitArgs,
  NftBurn,
  NftBurnArgs,
  NftGate,
  NftGateArgs,
  NftPayment,
  NftPaymentArgs,
  ProgramGate,
  ProgramGateArgs,
  RedeemedAmount,
  RedeemedAmountArgs,
  SolPayment,
  SolPaymentArgs,
  StartDate,
  StartDateArgs,
  ThirdPartySigner,
  ThirdPartySignerArgs,
  TokenBurn,
  TokenBurnArgs,
  TokenGate,
  TokenGateArgs,
  TokenPayment,
  TokenPaymentArgs,
  getAddressGateSerializer,
  getAllocationSerializer,
  getAllowListSerializer,
  getBotTaxSerializer,
  getEndDateSerializer,
  getFreezeSolPaymentSerializer,
  getFreezeTokenPaymentSerializer,
  getGatekeeperSerializer,
  getMintLimitSerializer,
  getNftBurnSerializer,
  getNftGateSerializer,
  getNftPaymentSerializer,
  getProgramGateSerializer,
  getRedeemedAmountSerializer,
  getSolPaymentSerializer,
  getStartDateSerializer,
  getThirdPartySignerSerializer,
  getTokenBurnSerializer,
  getTokenGateSerializer,
  getTokenPaymentSerializer,
} from '.';

/** The set of guards available. */
export type GuardSet = {
  /** Last instruction check and bot tax (penalty for invalid transactions). */
  botTax: Option<BotTax>;
  /** Sol payment guard (set the price for the mint in lamports). */
  solPayment: Option<SolPayment>;
  /** Token payment guard (set the price for the mint in spl-token amount). */
  tokenPayment: Option<TokenPayment>;
  /** Start data guard (controls when minting is allowed). */
  startDate: Option<StartDate>;
  /** Third party signer guard (requires an extra signer for the transaction). */
  thirdPartySigner: Option<ThirdPartySigner>;
  /** Token gate guard (restrict access to holders of a specific token). */
  tokenGate: Option<TokenGate>;
  /** Gatekeeper guard (captcha challenge). */
  gatekeeper: Option<Gatekeeper>;
  /** End date guard (set an end date to stop the mint). */
  endDate: Option<EndDate>;
  /** Allow list guard (curated list of allowed addresses). */
  allowList: Option<AllowList>;
  /** Mint limit guard (add a limit on the number of mints per wallet). */
  mintLimit: Option<MintLimit>;
  /** NFT Payment (charge an NFT in order to mint). */
  nftPayment: Option<NftPayment>;
  /** Redeemed amount guard (add a limit on the overall number of items minted). */
  redeemedAmount: Option<RedeemedAmount>;
  /** Address gate (check access against a specified address). */
  addressGate: Option<AddressGate>;
  /** NFT gate guard (check access based on holding a specified NFT). */
  nftGate: Option<NftGate>;
  /** NFT burn guard (burn a specified NFT). */
  nftBurn: Option<NftBurn>;
  /** Token burn guard (burn a specified amount of spl-token). */
  tokenBurn: Option<TokenBurn>;
  /** Freeze sol payment guard (set the price for the mint in lamports with a freeze period). */
  freezeSolPayment: Option<FreezeSolPayment>;
  /** Freeze token payment guard (set the price for the mint in spl-token amount with a freeze period). */
  freezeTokenPayment: Option<FreezeTokenPayment>;
  /** Program gate guard (restricts the programs that can be in a mint transaction). */
  programGate: Option<ProgramGate>;
  /** Allocation guard (specify the maximum number of mints in a group). */
  allocation: Option<Allocation>;
};

export type GuardSetArgs = {
  /** Last instruction check and bot tax (penalty for invalid transactions). */
  botTax: Option<BotTaxArgs>;
  /** Sol payment guard (set the price for the mint in lamports). */
  solPayment: Option<SolPaymentArgs>;
  /** Token payment guard (set the price for the mint in spl-token amount). */
  tokenPayment: Option<TokenPaymentArgs>;
  /** Start data guard (controls when minting is allowed). */
  startDate: Option<StartDateArgs>;
  /** Third party signer guard (requires an extra signer for the transaction). */
  thirdPartySigner: Option<ThirdPartySignerArgs>;
  /** Token gate guard (restrict access to holders of a specific token). */
  tokenGate: Option<TokenGateArgs>;
  /** Gatekeeper guard (captcha challenge). */
  gatekeeper: Option<GatekeeperArgs>;
  /** End date guard (set an end date to stop the mint). */
  endDate: Option<EndDateArgs>;
  /** Allow list guard (curated list of allowed addresses). */
  allowList: Option<AllowListArgs>;
  /** Mint limit guard (add a limit on the number of mints per wallet). */
  mintLimit: Option<MintLimitArgs>;
  /** NFT Payment (charge an NFT in order to mint). */
  nftPayment: Option<NftPaymentArgs>;
  /** Redeemed amount guard (add a limit on the overall number of items minted). */
  redeemedAmount: Option<RedeemedAmountArgs>;
  /** Address gate (check access against a specified address). */
  addressGate: Option<AddressGateArgs>;
  /** NFT gate guard (check access based on holding a specified NFT). */
  nftGate: Option<NftGateArgs>;
  /** NFT burn guard (burn a specified NFT). */
  nftBurn: Option<NftBurnArgs>;
  /** Token burn guard (burn a specified amount of spl-token). */
  tokenBurn: Option<TokenBurnArgs>;
  /** Freeze sol payment guard (set the price for the mint in lamports with a freeze period). */
  freezeSolPayment: Option<FreezeSolPaymentArgs>;
  /** Freeze token payment guard (set the price for the mint in spl-token amount with a freeze period). */
  freezeTokenPayment: Option<FreezeTokenPaymentArgs>;
  /** Program gate guard (restricts the programs that can be in a mint transaction). */
  programGate: Option<ProgramGateArgs>;
  /** Allocation guard (specify the maximum number of mints in a group). */
  allocation: Option<AllocationArgs>;
};

export function getGuardSetSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<GuardSetArgs, GuardSet> {
  const s = context.serializer;
  return s.struct<GuardSet>(
    [
      ['botTax', s.option(getBotTaxSerializer(context))],
      ['solPayment', s.option(getSolPaymentSerializer(context))],
      ['tokenPayment', s.option(getTokenPaymentSerializer(context))],
      ['startDate', s.option(getStartDateSerializer(context))],
      ['thirdPartySigner', s.option(getThirdPartySignerSerializer(context))],
      ['tokenGate', s.option(getTokenGateSerializer(context))],
      ['gatekeeper', s.option(getGatekeeperSerializer(context))],
      ['endDate', s.option(getEndDateSerializer(context))],
      ['allowList', s.option(getAllowListSerializer(context))],
      ['mintLimit', s.option(getMintLimitSerializer(context))],
      ['nftPayment', s.option(getNftPaymentSerializer(context))],
      ['redeemedAmount', s.option(getRedeemedAmountSerializer(context))],
      ['addressGate', s.option(getAddressGateSerializer(context))],
      ['nftGate', s.option(getNftGateSerializer(context))],
      ['nftBurn', s.option(getNftBurnSerializer(context))],
      ['tokenBurn', s.option(getTokenBurnSerializer(context))],
      ['freezeSolPayment', s.option(getFreezeSolPaymentSerializer(context))],
      [
        'freezeTokenPayment',
        s.option(getFreezeTokenPaymentSerializer(context)),
      ],
      ['programGate', s.option(getProgramGateSerializer(context))],
      ['allocation', s.option(getAllocationSerializer(context))],
    ],
    { description: 'GuardSet' }
  ) as Serializer<GuardSetArgs, GuardSet>;
}
