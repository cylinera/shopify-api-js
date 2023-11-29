export interface FutureFlags {
  unstable_tokenExchange?: boolean;
  unstable_lineItemBilling?: boolean;
  unstable_newApiClients?: boolean;
}

export type FutureFlagOptions = FutureFlags | undefined;

export type FeatureEnabled<
  Future extends FutureFlagOptions,
  Flag extends keyof FutureFlags,
> = Future extends FutureFlags
  ? Future[Flag] extends true
    ? true
    : false
  : false;
