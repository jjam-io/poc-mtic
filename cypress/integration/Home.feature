Feature: Home
  Global test

  @DEV
  Scenario: Navigation on desktop
    Given I open the home page
    Then I see a title with "POC meetic"
