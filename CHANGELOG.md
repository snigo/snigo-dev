# Changelog
All notable changes to this project will be documented in this file.

## [0.5.0] - 2020-05-21

### Added
- Rich data meta: JSON-LD script, open graph and twitter card details
Can be tested here: 
https://search.google.com/structured-data/testing-tool
https://developers.facebook.com/tools/debug/
- Logo in the topbar instead of text

### Fixed
- Task card image overflow issue

## [0.4.0] - 2020-05-20
### Added
- Project type cards with links to the project live demo and source code

## [0.3.0] - 2020-05-19
### Added
- PWA offline support using [workbox](https://developers.google.com/web/tools/workbox)
- Markdown support for user stories and changelog tabs
- Topbar with contact information
- Website footer
- Animation for details section of the task card (Work in progress)

### Changed
- Color contrast of interactive elements was increassed to comply with WCAG recomendations

### Fixed
- Minor fixes for smaller screens and bottom margin
- Word wrapping issue with long urls in the changelog

## [0.2.0] - 2020-05-18
### Added
- Pre-push git hook that bumps version and updates changelog prior to deployment
- Website keywords and description
- Script that automatically changes relative day of the challenge
- Changelog and user stories tabs for the task card

### Changed
- Day task is switched from dummy to reusable component

### Fixed
- Website is now more or less responsive (work in progress)

## [0.1.0] - 2020-05-17
### Added
- Initial setup of typescript and sass environment for Next.js
- Configuration of domain name
- Continuous integration / deployment from github repository

[0.1.0]: https://github.com/snigo/snigo-dev/releases/tag/v0.1.0
[0.2.0]: https://github.com/snigo/snigo-dev/compare/v0.1.0...v0.2.0
[0.3.0]: https://github.com/snigo/snigo-dev/compare/v0.2.0...v0.3.0
[0.4.0]: https://github.com/snigo/snigo-dev/compare/v0.3.0...v0.4.0

