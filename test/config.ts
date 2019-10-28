import { BaseConfig } from '@scaleleap/config'
import { Polly } from '@pollyjs/core'

const POLY_MODES: Polly['mode'][] = ['record', 'passthrough', 'replay', 'stopped']

export class Config extends BaseConfig {
  public readonly TEST_APPLICATION_ID = this.get('TEST_APPLICATION_ID').asString()
  public readonly TEST_CLIENT_ID = this.get('TEST_CLIENT_ID').asString()
  public readonly TEST_CLIENT_SECRET = this.get('TEST_CLIENT_SECRET').asString()
  public readonly TEST_SCOPE = this.get('TEST_SCOPE').asIntPositive()
  public readonly TEST_ACCESS_TOKEN = this.get('TEST_ACCESS_TOKEN').asString()
  public readonly TEST_REFRESH_TOKEN = this.get('TEST_REFRESH_TOKEN').asString()

  public readonly TEST_OAUTH_REDIRECT_PORT = this.get(
    'TEST_OAUTH_REDIRECT_PORT',
    '3000',
  ).asIntPositive()

  public readonly POLLY_MODE = this.get('POLLY_MODE', 'replay').asEnum(POLY_MODES) as Polly['mode']
}

export const config = new Config()