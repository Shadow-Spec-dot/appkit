import type { ModalFixture } from './w3m-fixture'
import { ModalPage } from '../pages/ModalPage'
import { timingFixture } from './timing-fixture'

export const testMWagmiVerifyDomainMismatch = timingFixture.extend<ModalFixture>({
  library: ['wagmi', { option: true }],
  modalPage: async ({ page, library }, use) => {
    const modalPage = new ModalPage(page, library, 'wagmi-verify-domain-mismatch')
    await modalPage.load()
    await use(modalPage)
  }
})
