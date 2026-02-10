import { Resolver, Query } from '@nestjs/graphql';

// NOTE: ロードバランサー等からチェックするためのエンドポイント
@Resolver()
export class HealthResolver {
  @Query(() => String)
  health(): string {
    return 'ok';
  }
}
