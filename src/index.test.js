import { mount } from 'vue-test-utils'
import VueChevron from './'

test('it works', () => {
  const wrapper = mount(VueChevron)
  expect(wrapper.isVueInstance()).toBe(true)
})
