# Z-Index Hierarchy Guide

## Current Z-Index Layers

### Base Layer (z-10 to z-20)
- **z-10**: Background elements, base content
- **z-20**: Cards, sections with slight elevation

### UI Layer (z-30 to z-40)
- **z-30**: Dropdowns, tooltips
- **z-40**: Mobile menu panels

### Navigation Layer (z-50)
- **z-50**: 
  - Main navbar (`components/Navbar/navbar.tsx`)
  - Header (`app/layout.tsx`)
  - Search overlays
  - Chatbot button and panel

### Modal Layer (z-60+)
- **z-60**: 
  - Blog creation form modal (`components/Blog/BlogForm.tsx`)
  - Blog detail modal (`components/Blog/BlogDetail.tsx`)
  - Any other full-screen modals

### Critical Layer (z-70+)
- **z-70**: Error messages, alerts
- **z-80**: Loading overlays
- **z-90**: Critical system messages

## Best Practices

1. **Navigation stays at z-50** - This ensures consistent navbar visibility
2. **Modals use z-60+** - This ensures they appear above navigation
3. **Use Tailwind arbitrary values** - `z-[60]` for custom z-index values
4. **Reserve z-70+** - For system-critical elements only

## Fixed Components

✅ **BlogForm Modal**: Changed from `z-50` to `z-[60]`
✅ **BlogDetail Modal**: Changed from `z-50` to `z-[60]`

## Components That May Need Updates

- Any future modal components should use `z-[60]` or higher
- Ensure dropdowns and popovers use appropriate z-index levels
- System alerts and notifications should use `z-[70]` or higher