import { shallowMount } from '@vue/test-utils'
import TheSidebarNavigation from './TheSidebarNavigation.vue'

test('TheSidebarNavigation', () => {
  // render the component
  const wrapper = shallowMount(TheSidebarNavigation)

  expect(wrapper.element).toMatchSnapshot()
})
