# ERPNext Projects Plus Permission Documentation

## EPP Member Role Creation
A custom role named "EPP Member" has been created to grant necessary permissions to members of a project. Notably, EPP Members possess fewer access rights compared to Project Users.

## Customization of Project Fields
The Project doctype has been customized to include level 1 fields. These fields are categorized under the following sections:
1. **Customer Details**
2. **Users**
3. **Costing and Billing**
4. **Margin**

## Extra Permissions for Specific Doctypes

### Commit
- **System Manager:** Read, Delete Permission
- **Administrator:** Read, Delete Permission
- **Project Manager:** Read, Delete
- **Project User:** Read
- **EPP Member:** Read

### Pull Request
- **System Manager:** Read, Delete Permission
- **Administrator:** Read, Delete Permission
- **Project Manager:** Read, Delete
- **Project User:** Read
- **EPP Member:** Read

### Task
- **EPP Member:** Read, Write, Create

### Project Permissions
- **Project User and Project Manager:**
  - Level 1 Field Permissions
- **EPP Member:**
  - Level 0 Field Permissions
  - Sensitivity: Fields marked as Level 1 are considered sensitive and are restricted from view by EPP Members.
- **All Roles:**
  - Level 2 Field Permissions

### ERPNext-Projects-Plus Settings Permissions
- **System Manager:** Read, Write, Create, Delete
- **Administrator:** Read, Write, Create, Delete

### Github Credential Permissions
- **System Manager:** Read, Write, Create, Delete
- **Administrator:** Read, Write, Create, Delete

This documentation outlines the customizations and permissions applied within the Frappe ERPNext environment. It provides clear insight into the roles, permissions, and field-level access for various doctypes and settings.
