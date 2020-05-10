import { shallowMount } from '@vue/test-utils'
import Contact from './index.vue'

test('Contact', () => {
  // render the component
  const wrapper = shallowMount(Contact)

  expect(wrapper.element).toMatchSnapshot()
})
