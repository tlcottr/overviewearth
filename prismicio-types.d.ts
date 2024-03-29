// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type PageDocumentDataSlicesSlice = TeamSectionSlice | AboutSectionSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

export type AllDocumentTypes = PageDocument;

/**
 * Primary content in *AboutSection → Primary*
 */
export interface AboutSectionSliceDefaultPrimary {
  /**
   * aboutBodyParagraphOne field in *AboutSection → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Copy content for the first paragraph of the About section
   * - **API ID Path**: about_section.primary.aboutBodyParagraphOne
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  aboutBodyParagraphOne: prismic.RichTextField;

  /**
   * aboutBodyParagraphTwo field in *AboutSection → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Copy content for the second paragraph of the About section
   * - **API ID Path**: about_section.primary.aboutBodyParagraphTwo
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  aboutBodyParagraphTwo: prismic.RichTextField;
}

/**
 * Default variation for AboutSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AboutSectionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *AboutSection*
 */
type AboutSectionSliceVariation = AboutSectionSliceDefault;

/**
 * AboutSection Shared Slice
 *
 * - **API ID**: `about_section`
 * - **Description**: AboutSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutSectionSlice = prismic.SharedSlice<
  "about_section",
  AboutSectionSliceVariation
>;

/**
 * Primary content in *TeamSection → Primary*
 */
export interface TeamSectionSliceDefaultPrimary {
  /**
   * name field in *TeamSection → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: team_section.primary.name
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  name: prismic.RichTextField;

  /**
   * role field in *TeamSection → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: team_section.primary.role
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  role: prismic.RichTextField;

  /**
   * nameTwo field in *TeamSection → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: team_section.primary.nameTwo
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  nameTwo: prismic.RichTextField;

  /**
   * roleTwo field in *TeamSection → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: team_section.primary.roleTwo
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  roleTwo: prismic.RichTextField;

  /**
   * nameThree field in *TeamSection → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: team_section.primary.nameThree
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  nameThree: prismic.RichTextField;

  /**
   * roleThree field in *TeamSection → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: team_section.primary.roleThree
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  roleThree: prismic.RichTextField;
}

/**
 * Default variation for TeamSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TeamSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TeamSectionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *TeamSection*
 */
type TeamSectionSliceVariation = TeamSectionSliceDefault;

/**
 * TeamSection Shared Slice
 *
 * - **API ID**: `team_section`
 * - **Description**: TeamSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TeamSectionSlice = prismic.SharedSlice<
  "team_section",
  TeamSectionSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      AllDocumentTypes,
      AboutSectionSlice,
      AboutSectionSliceDefaultPrimary,
      AboutSectionSliceVariation,
      AboutSectionSliceDefault,
      TeamSectionSlice,
      TeamSectionSliceDefaultPrimary,
      TeamSectionSliceVariation,
      TeamSectionSliceDefault,
    };
  }
}
