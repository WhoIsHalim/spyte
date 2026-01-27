# Spyte

A Chrome DevTools extension for monitoring and testing HTTP requests.

![Spyte Logo](images/spyte128.png)

## Features

- **Monitor HTTP Requests**: Track GET, POST, PATCH, PUT, DELETE, and other HTTP methods in real-time
- **Request Inspector**: View detailed request and response headers, body, and metadata
- **REST Client**: Send custom HTTP requests directly from the DevTools panel
- **JSON/XML Formatter**: Automatically format and prettify JSON and XML responses
- **Request Filtering**: Filter requests by method, status, type, size, and URL
- **Response Time Tracking**: Monitor request latency and performance

## Installation

### From Chrome Web Store
*Coming soon*

### Manual Installation (Developer Mode)
1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked"
5. Select the `spyte` folder

## Usage

1. Open Chrome DevTools (F12 or Right-click → Inspect)
2. Navigate to the **Spyte** tab
3. Refresh the page to see network requests
4. Click on any request to view details
5. Use the **+ new** button to send custom requests

## Screenshots

*Coming soon*

## Development

This extension is built using:
- Manifest V3
- Vanilla JavaScript
- jQuery for DOM manipulation
- Bootstrap for UI components

## Security

Spyte v2.0 has been completely audited and cleaned:
- ✅ No tracking or analytics
- ✅ No external connections
- ✅ Minimal permissions
- ✅ Open source and transparent

## License

MIT License - see [LICENSE](LICENSE) file for details

## Author

**Halim**
- GitHub: [@WhoIsHalim](https://github.com/WhoIsHalim)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Changelog

### v2.0.0 (2026-01-27)
- Migrated to Manifest V3
- Removed all tracking and malware
- Refactored request sender to use `fetch()` instead of `eval()`
- Complete security audit and cleanup
- Rebranded to Spyte

### v1.3.22 (Legacy)
- Original WebSpy version (deprecated)
