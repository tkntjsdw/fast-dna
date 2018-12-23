---
id: standards
title: Contributing
sidebar_label: Standards
---

# Standards

Our contributors use these standards for consistency and quality in the repository.

## Naming conventions

* Avoid abbreviations unless they are common industry acronyms.
* Use names that are clear and intuitive.
* Use semantic names instead of presentational.

## Accessibility

Acknowledge accessibility from the start of each new feature in collaboration with the legal and accessibility. As a system for the building of websites and applications, we ensure you have the tools to create accessible user experiences.

### Animation

* Users should have a mechanism to reduce or remove animations from their experience. The Safari devs have proposed a media query for reduced animation. ("prefers-reduced-motion"). Animations longer than 3 seconds must provide a way to stop the motion.
* Some users with vestibular disorders or other cognitive disabilities have problems with movement. A safe fallback for nearly all users is fade animations.
* Avoid flashing animations can cause seizures or discomfort.

## JSS (JavaScript Style Sheets) usage

JSS class names follow a [BEM-like](http://getbem.com/naming/) convention but our implementation of BEM is slightly modified because dashes — the character used to delimit *modifiers* — cannot be used as JavaScript object keys without using string literals; use underscores instead. A single underscore separates an element from a block while two underscores separate a modifier from a block or element.

Example:

```html
block_element__modifier
```

Within a block, element, or modifier, words should be camelCased:

```html
anotherBlock_anotherElement__anotherModifier