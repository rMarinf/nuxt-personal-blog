import { shallowMount } from '@vue/test-utils'
import About from './index.vue'

test('About', () => {
  // render the component
  const wrapper = shallowMount(About)

  expect(wrapper.element).toMatchSnapshot()
})
