## Purpose

Provides visual layout authoring and rendering capabilities powered by Puck editor, enabling interactive composition and real-time preview of page sections.

## ADDED Requirements

### Requirement: Visual Page Editor Route
The system SHALL provide an editor interface at `/edit` that displays the Puck visual editor with registered components and canvas editing tools.

#### Scenario: Accessing visual editor
- **WHEN** an editor navigates to `/edit`
- **THEN** the interactive Puck layout editor loads with available component blocks in the sidebar

### Requirement: Public Page Layout Rendering
The system SHALL render the published page layout at `/` based on configured component data.

#### Scenario: Public page rendering from layout configuration
- **WHEN** a user visits `/`
- **THEN** the page renders components matching the layout data configuration without editor chrome or toolbars

### Requirement: Editable Component Schema Integration
The system SHALL support visual block configurations where editors can modify block props (e.g. titles, dates, descriptions, image URLs, alignment) in real time.

#### Scenario: Updating component props in editor
- **WHEN** an editor modifies component props in the editor sidebar
- **THEN** the canvas preview immediately reflects the modified content
