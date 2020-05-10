import { shallowMount } from '@vue/test-utils'
import Blog from './index.vue'

test('Blog', () => {
  // render the component
  const wrapper = shallowMount(Blog)

  expect(wrapper.element).toMatchSnapshot()
})
