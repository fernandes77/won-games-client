import type { Meta, StoryObj } from '@storybook/react'
import {
  Dropdown,
  DropdownContent,
  DropdownGroup,
  DropdownItem,
  DropdownLabel,
  DropdownPortal,
  DropdownSeparator,
  DropdownShortcut,
  DropdownSub,
  DropdownSubContent,
  DropdownSubTrigger,
  DropdownTrigger
} from './Dropdown'

const meta: Meta<typeof Dropdown> = {
  component: Dropdown
}

export default meta
type Story = StoryObj<typeof Dropdown>

export const Primary: Story = {
  parameters: { backgrounds: { default: 'won-light' } },
  decorators: [
    () => (
      <Dropdown>
        <DropdownTrigger asChild>
          <button>Open</button>
        </DropdownTrigger>

        <DropdownContent className="w-56">
          <DropdownLabel>My Account</DropdownLabel>

          <DropdownSeparator />

          <DropdownGroup>
            <DropdownItem>
              Profile
              <DropdownShortcut>⇧⌘P</DropdownShortcut>
            </DropdownItem>

            <DropdownItem>
              Billing
              <DropdownShortcut>⌘B</DropdownShortcut>
            </DropdownItem>

            <DropdownItem>
              Settings
              <DropdownShortcut>⌘S</DropdownShortcut>
            </DropdownItem>

            <DropdownItem>
              Keyboard shortcuts
              <DropdownShortcut>⌘K</DropdownShortcut>
            </DropdownItem>
          </DropdownGroup>

          <DropdownSeparator />

          <DropdownGroup>
            <DropdownItem>Team</DropdownItem>

            <DropdownSub>
              <DropdownSubTrigger>Invite users</DropdownSubTrigger>

              <DropdownPortal>
                <DropdownSubContent>
                  <DropdownItem>Email</DropdownItem>
                  <DropdownItem>Message</DropdownItem>
                  <DropdownSeparator />
                  <DropdownItem>More...</DropdownItem>
                </DropdownSubContent>
              </DropdownPortal>
            </DropdownSub>

            <DropdownItem>
              New Team
              <DropdownShortcut>⌘+T</DropdownShortcut>
            </DropdownItem>
          </DropdownGroup>

          <DropdownSeparator />

          <DropdownItem>GitHub</DropdownItem>

          <DropdownItem>Support</DropdownItem>

          <DropdownItem disabled>API</DropdownItem>

          <DropdownSeparator />

          <DropdownItem>
            Log out
            <DropdownShortcut>⇧⌘Q</DropdownShortcut>
          </DropdownItem>
        </DropdownContent>
      </Dropdown>
    )
  ]
}
