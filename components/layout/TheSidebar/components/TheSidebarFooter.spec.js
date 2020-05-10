import { shallowMount } from '@vue/test-utils'
import TheSidebarFooter from './TheSidebarFooter.vue'

test('TheSidebarFooter', () => {
  // render the component
  const wrapper = shallowMount(TheSidebarFooter)

  expect(wrapper.element).toMatchSnapshot()
})
