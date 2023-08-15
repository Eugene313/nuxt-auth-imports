import { NuxtAuthHandler } from '#auth';
import IdentityServer4 from 'next-auth/providers/identity-server4';

export default NuxtAuthHandler({
  secret: 'my-superb-secret',
  providers: [
    // @ts-expect-error
    IdentityServer4.default({
      id: 'smartId',
      name: 'SmartId',
      issuer: 'https://smartid-test.smarttender.biz/2.0/login',
      clientId: 'smarttender.client',
      clientSecret: 'd607ad15-4fb1-4ec1-983b-71719e2350d4',
      authorization: {
        params: {
          scope: 'openid profile email phone offline_access qesignature edrpousupposed smarttender.api smarttender.prozorro smarttender.prozorro.sale',
        },
      },
    }),
  ],
});
