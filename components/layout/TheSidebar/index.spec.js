import { shallowMount } from '@vue/test-utils'
import TheSidebar from './index.vue'

describe('TheSidebar', function() {
  describe('Render', function() {
    test('should render component', () => {
      // render the component
      const wrapper = shallowMount(TheSidebar, {
        stubs: {
          'the-sidebar-navigation': true,
          'the-sidebar-footer': true
        }
      })

      expect(wrapper.element).toMatchSnapshot()
    })

    test('should render component with active class', () => {
      // render the component
      const wrapper = shallowMount(TheSidebar, {
        stubs: {
          'the-sidebar-navigation': true,
          'the-sidebar-footer': true
        },
        data() {
          return {
            isActive: 'true'
          }
        }
      })

      expect(wrapper.element).toMatchSnapshot()
    })
  })
})
