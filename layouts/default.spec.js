import { shallowMount } from '@vue/test-utils'
import DefaultLayout from './default.vue'

test('DefaultLayout', () => {
  // render the component
  const wrapper = shallowMount(DefaultLayout, {
    stubs: {
      'the-sidebar': true,
      nuxt: true
    }
  })

  expect(wrapper.element).toMatchSnapshot()
})
