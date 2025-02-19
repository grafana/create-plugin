---
id: publishing-best-practices
title: Publishing best practices
sidebar_position: 0
description: Best practices for publishing your plugin
keywords:
  - grafana
  - plugins
  - plugin
  - publish
  - best practices
---

# Publishing best practices

When publishing a Grafana plugin, following best practices ensures not only a smooth submission and review process but also a higher quality experience for users. By following established guidelines, you improve the plugin’s performance, security, and discoverability within the Grafana ecosystem, ensuring that your plugin stands out as a shining example of what a Grafana plugin can be.

Before proceeding, we assume that you've already [created your initial plugin](../), reviewed the [best practices for plugin development guide](../get-started/best-practices), and familiarized yourself with the guidance on [plugin signature levels](../publish-a-plugin/sign-a-plugin#public-or-private-plugins).

This document outlines the essential best practices for you to follow before publishing your Grafana plugin. These recommendations will help you avoid common pitfalls, streamline the review process, and create a plugin that integrates seamlessly into users' workflows while maintaining the high standards expected in the Grafana ecosystem. Whether you’re fine-tuning your plugin’s functionality or preparing your documentation, following these practices will ensure that your plugin is optimized for success from the start.

## Populating your plugin's metadata

Metadata plays a crucial role in making your Grafana plugin discoverable and user-friendly. Properly structuring the [metadata in your `plugin.json` file](../reference/metadata.md) not only helps users find your plugin in [Grafana’s plugin catalog](https://grafana.com/grafana/plugins/) but also provides essential details about the plugin’s functionality and compatibility.

Here’s a breakdown of the key components to focus on:

**[Plugin name](../reference/plugin-json#properties)**

`name`

The name of your plugin should be clear, concise, and descriptive. It is the first point of interaction for potential users, so avoid overly generic or cryptic names. Aim for a name that reflects the plugin’s primary functionality, making it easy to understand its purpose at a glance.

**[Description](../reference/plugin-json#info)**

`info.description`

The description field should succinctly summarize what your plugin does and why users should install it. Limit the description to two sentences, highlighting the core functionality and use cases. A well-written description not only informs users, but also contributes to better search results in the catalog.

**[Keywords](../reference/plugin-json#info)**

`info.keywords`

Keywords improve the searchability of your plugin within Grafana’s catalog. Choose terms that accurately describe your plugin’s functionality and data types it supports (e.g., "JSON", "SQL", "visualization").

:::note

Avoid keyword stuffing; irrelevant keywords will be flagged during the review process, potentially delaying publication.

:::

**[Logos](../reference/plugin-json#info)**

`info.logos`

Adding logos improves the overall look and feel of your plugin within the plugin catalog. Providing a logo adds legitimacy and professionalism to your plugin.

**[Screenshots](../reference/plugin-json#info)**

`info.screenshots`

The screenshots field should be used to provide an array with one or more screenshot images that will be displayed within the plugin catalog. This is great for providing users with a visual representation of your plugin and can help them establish whether or not this plugin solves their problem before they even install it. Be sure to provide screenshots of your plugin in action, highlighting the standout features.

:::note

Ensure your screenshots are a suitable resolution and file type (e.g. png, jpeg, or gif).

:::

**[Grafana version compatibility](../reference/plugin-json#dependencies)**

`dependencies.grafanaDependency`

Ensure your plugin specifies the minimum Grafana version it is compatible with. This guarantees that users running different versions of Grafana know whether your plugin will work for them. Be sure to [run end-to-end tests](../e2e-test-a-plugin/introduction.md) to confirm compatibility with releases you support.

## Creating a comprehensive README

Your plugin's README file serves as both a first impression and a detailed guide for your users. Think of it as a combination of a storefront advertisement and an instruction manual—showing what your plugin can do, how to install it, and how users can make the most of it within their Grafana instances.

To assist developers in crafting a high-quality README, we provide a [README template](https://raw.githubusercontent.com/grafana/plugin-tools/main/packages/create-plugin/templates/common/src/README.md) as part of the plugin structure generated by the `create-plugin` tool. This template ensures you cover the essential components while giving you flexibility to add more specific details.

Beyond a basic overview of your plugin, its use cases, and requirements, there are additional elements you should consider including to help users understand the value and functionality of your plugin:

- **Screenshots or screen captures:** Visual aids often communicate better than text alone. Including screenshots or even video demonstrations allows users to quickly grasp the plugin’s capabilities and setup process, giving them confidence to use it effectively.
- **Dynamic badges:** Badges provide quick, at-a-glance information about your plugin, such as the latest release version or whether it has passed security and code checks. Tools like [shields.io](https://shields.io/) can be used with the Grafana.com API to automatically update these badges whenever you publish a new version, adding transparency and trustworthiness to your plugin.
- **Contribution guidance:** Maintaining a plugin can be demanding, especially for individual developers. Clearly outlining how users can provide feedback, report bugs, and directing potential code contributors to your `contributing.md` are all ways to help foster community involvement, making it easier to maintain and improve your plugin over time.

This structure ensures that your README is both informative and engaging, providing users with everything they need to confidently use and contribute to your plugin.

## End-to-end testing

End-to-end (E2E) testing ensures that your Grafana plugin works correctly across various environments and supported Grafana versions. It replicates real-world usage by testing the plugin in an environment similar to the end-user's setup. Implementing E2E tests helps catch issues before submission, saving time during the review process and ensuring a smoother user experience.

**Key points:**

- **Test compatibility across versions:** Ensure your plugin works seamlessly with various versions of Grafana by setting up E2E tests targeting multiple releases.
- **Automate testing:** Integrate E2E testing into your continuous integration (CI) pipeline to catch issues early and frequently, reducing potential problems during review.

For a comprehensive guide on setting up E2E tests, refer to our [E2E test a plugin](../e2e-test-a-plugin/introduction.md) documentation.

## Validate your plugin

Before submitting your plugin for review, validate your plugin to ensure that it meets Grafana's standards for functionality, security, and structure. The easiest way to do this is with the Plugin Validator. This tool checks for potential issues that could prevent your plugin from being accepted, such as security vulnerabilities or structural problems.

**Key points:**

- **Run locally or in CI:** You can run the validator locally or integrate it into your CI workflow to automate the validation process. Note, the validator runs automatically during the default release workflow.
- **Validation reports:** The tool generates a report, highlighting any errors or warnings that need to be addressed before submission.

For more information on using the validator, refer to the [Plugin Validator documentation](https://github.com/grafana/plugin-validator).

## Provide a provisioned test environment

Provisioning a test environment for your plugin can significantly reduce the review time and make it easier for others to test and contribute to your plugin. A provisioned environment includes a pre-configured Grafana instance with sample dashboards and data sources that demonstrate your plugin's functionality.

**Key points:**

- **Why provisioning matters:** It ensures that both reviewers and contributors can quickly verify your plugin's behaviour without manual setup, speeding up the review and collaboration process.
- **Automated setup:** You can provision test environments using Docker to create an out-of-the-box experience that replicates a typical Grafana setup.

To learn more about setting up provisioned environments, check out our [provisioning guide](../publish-a-plugin/provide-test-environment.md).

## Automating releases with GitHub Actions

To streamline your plugin development workflow, it's a best practice to automate releases using GitHub Actions. Automating this process helps ensure that your plugin is built, signed, and packaged correctly on each release, reducing human error and expediting the publishing process.

**Key points:**

- **Continuous integration (CI):** Use GitHub Actions to automatically build and test your plugin on every commit or pull request, catching issues early.
- **Release workflow:** Automate the signing and packaging of your plugin when you're ready to publish, ensuring it meets the necessary criteria for submission to the Grafana plugin catalog.

For detailed setup instructions, refer to our [Automate packaging and signing with GitHub](../publish-a-plugin/build-automation.md) guide.

## Next steps

By following these best practices - such as carefully populating metadata, creating a comprehensive README, validating your plugin, provisioning test environments, and automating releases - you significantly increase the chances of a successful plugin submission.

Each of these best practices are designed to ensure that your plugin not only passes our review process but also delivers an exceptional experience for users. Adopting these practices will streamline your workflow and help create plugins that stand out in the Grafana ecosystem.

Once you're ready for your plugin to be published, follow our guide for [submitting your plugin for review](../publish-a-plugin/publish-or-update-a-plugin.md). We look forward to seeing what you create!
