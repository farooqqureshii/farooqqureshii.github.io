---
title: "Substack Brand Case Study"
description: "A detailed analysis of Substack's brand strategy and market positioning"
date: "May 8 2025"
---

# Substack | Product Case Study

> This a personal case study. I am not affiliated in any way with Substack.

> [Figma Board](https://www.figma.com/design/xo2LM1oobkjEsaIASej3v1/Substack-%7C-Product---Design?m=auto&t=PYVPMFM7FwrGwuy3-1)

## Summary

Substack is a fast-growing media platform that enables independent creators to publish newsletters, podcasts, and videos. As it expands beyond newsletters, users face increased friction in content curation and engagement. This case study explores how Substack can evolve into a more community-centric, discovery-friendly platform for both readers and writers.

## Background

Substack is a media platform for a wide range of content, including writing, video and podcasts. It provides the writer a median to create a more organic audience for their content, packaged within a easy-to-use platform.

A table showing some user persona analysis is shown below.

| Persona | Name  | Age | Type   | Comments                                                                                    |
| ------- | ----- | --- | ------ | ------------------------------------------------------------------------------------------- |
| 1       | Maya  | 31  | Reader | Overwhelmed w/ mixed media (articles, notes, podcasts) → wants better content organization. |
| 2       | Zahid | 21  | Writer | Struggles to understand which content drives user engagement.                               |

## Problem Statement

As Substack expands its media offerings and social features, readers struggle to curate their experience, while writers lack visibility into their audiences and community relationships.

## Research & Discovery

+ Forum Screenshots

![Forum Screenshot 1](/static/Screenshot%202025-05-09%20182500.png)

![Forum Screenshot 2](/static/connections).png)

- Creators struggle in understanding *what works and what doesn't work* even in spite of the presence of an analytics dashboard.
- Readers feel like their feed is *unfiltered* and the addition of notes and podcasts has made the curation of content more messy.
- Creators seek a way to cultivate a relationship with other writers their audience is interested in.
- All users seek a way to engage in a more community like way on the service.

Translating these insights into results, is the table below.

| **Insight**                                  | **Result**                                     |
| -------------------------------------------- | ---------------------------------------------- |
| Creators don't know what engagement works    | Needs deeper analytics and visual feedback     |
| Readers' feeds feel messy with new formats   | Needs content segmentation                     |
| Creators want community with similar writers | Build social graph to surface shared audiences |

## Solution Breakdown

1. Corners (Spaces) → for Readers

A way for users to curate content by theme or topic, e.g., Climate, Culture, Politics. Inspired by tags, this lets readers organize content across formats (articles, notes, podcasts).

2. Graph View →  for Creators

A visual map of mutual subscribers and creator relationships, helping writers understand their audiences' shared interest.

We translate user pain points into solutions in the below table.

| Pain Point                                                                                      | Solution                                     |
| ----------------------------------------------------------------------------------------------- | -------------------------------------------- |
| Creators may struggle to to understand what methods of engagement best work for their audience. | Engagement dashboard + Graph View            |
| Readers may struggle to organize the content they see, notably across different forms.          | Spaces (tabbed content areas)                |
| Creators may seek a way to understand their audiences interest outside their platform.          | Graph View - mutual subscriber visualization |
| Readers and creators alike seek a way to be part of a community of like minded people.          | "See who else follows" badges                |

We also draft some feature analysis using the MoSCoW technique for prioritization.

| **Feature**      | **User** | **Description**                     | **MoSCoW**  | **Success Metric**                       |
| ---------------- | -------- | ----------------------------------- | ----------- | ---------------------------------------- |
| Spaces (Corners) | Reader   | Tabbed content areas to sort topics | Must-Have   | Avg. 2+ spaces/user, ↑ content read time |
| Graph View       | Creator  | Visual graph of audience overlaps   | Should-Have | 60% of creators explore at least 1 node  |
| Community Badges | Both     | "See who else follows" tags         | Could-Have  | 10% CTR on badges in 3 weeks             |

The below table shows a validation method for the above features.

| **Feature**          | **Validation Method**                                                                                                                                                                                                                                                        | **MVP Version**                                                               |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Spaces (Corners)     | A/B Testing: Test tabbed content areas with two groups (with and without Spaces). Measure engagement (e.g., read time, interaction).  <br>Interviews: Gather qualitative feedback from users on curation ease.  <br>Metrics: Track spaces created per user, engagement rate. | Tabs in the Library screen for topic-based sorting (e.g., Climate, Politics). |
| Graph View           | Usability Testing: Observe creators using the Graph View to explore audience relationships.  <br>Click Tracking: Measure interaction with nodes and visual map.  <br>Surveys: Collect creator feedback on feature usefulness.                                                | Static graph showing mutual audience overlaps.                                |
| Community Badges     | CTR Tracking: Measure the click-through rate on "See who else follows" badges in posts/comments.  <br>User Surveys: Collect feedback on badge usefulness.                                                                                                                    | Badges in posts and comments showing mutual followers.                        |
| Engagement Dashboard | Usage Logs: Track dashboard usage frequency and popular sections.  <br>Creator Survey: Measure feature value in refining engagement.  <br>A/B Testing: Compare engagement metrics with and without the dashboard.                                                            | A simplified version with format-specific filters.                            |

## User Flow Visualization

We show below the visualization of user flow for a reader in Substack. Importantly, we introduce through the tabbed content area, a new way for users to to view content, allowing them to stay engaged through two medians versus one.

## Corners Design

![Corners Design](/static/2.%20Twin%20View%20_%20Spaces.png)

## Welcome Page Design

![Welcome Page Design](/static/1.%20Graph%20View.png)

## Graph View

Medium Fidelity

![Graph View Medium Fidelity](/static/2.%20Graph%20View%20(Creator).png)

Prototype

<iframe src="data:text/html;base64,PCFkb2N0eXBlIGh0bWw+PGh0bWwgbGFuZz0iZW4iPjxoZWFkPjxtZXRhIGNoYXJzZXQ9IlVURi04Ij48dGl0bGU+SW50ZXJhY3RpdmUgR3JhcGggVmlldzwvdGl0bGU+PHN0eWxlPmJvZHl7bWFyZ2luOjA7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JhY2tncm91bmQtaW1hZ2U6cmFkaWFsLWdyYWRpZW50KCNjY2MgMXB4LHRyYW5zcGFyZW50IDApO2JhY2tncm91bmQtc2l6ZToyMHB4IDIwcHg7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZn0ubm9kZSBjaXJjbGV7c3Ryb2tlOiNmZmY7c3Ryb2tlLXdpZHRoOjJweDtjdXJzb3I6cG9pbnRlcjt0cmFuc2l0aW9uOnRyYW5zZm9ybSAwLjJzIGVhc2V9Lm5vZGUgdGV4dHtmaWxsOiNmZmZmZmY7Zm9udC1zaXplOjhweDtmb250LXdlaWdodDozMDA7dGV4dC1zaGFkb3c6MXB4IDFweCAycHggcmdiYSgwLDAsMCwwLjUpO3BvaW50ZXItZXZlbnRzOm5vbmU7dGV4dC1hbmNob3I6bWlkZGxlO2RvbWluYW50LWJhc2VsaW5lOm1pZGRsZX0ubm9kZTpob3ZlciBjaXJjbGV7dHJhbnNmb3JtOnNjYWxlKDEuMil9Lm5vZGU6aG92ZXIgdGV4dHtmb250LXdlaWdodDo0MDB9LnRvb2x0aXB7cG9zaXRpb246YWJzb2x1dGU7YmFja2dyb3VuZC1jb2xvcjojMzMzO2NvbG9yOndoaXRlO3BhZGRpbmc6NnB4IDEwcHg7Ym9yZGVyLXJhZGl1czo0cHg7Zm9udC1zaXplOjEycHg7cG9pbnRlci1ldmVudHM6bm9uZTtvcGFjaXR5OjA7dHJhbnNpdGlvbjpvcGFjaXR5IDAuMnMgZWFzZX0ubGlua3tzdHJva2U6Izk5OTtzdHJva2Utb3BhY2l0eTowLjZ9Lmdyb3VwLTAgY2lyY2xle2ZpbGw6I2Y0YTI2MX0uZ3JvdXAtMSBjaXJjbGV7ZmlsbDojNGE3YzU5fS5ncm91cC0yIGNpcmNsZXtmaWxsOiNhM2JmZmF9Lmdyb3VwLTMgY2lyY2xle2ZpbGw6I2IzOTJhY30uZ3JvdXAtMDpob3ZlciBjaXJjbGV7ZmlsbDojZTc2ZjUxfS5ncm91cC0xOmhvdmVyIGNpcmNsZXtmaWxsOiM1Yzk0NmV9Lmdyb3VwLTI6aG92ZXIgY2lyY2xle2ZpbGw6IzgwOWVmYX0uZ3JvdXAtMzpob3ZlciBjaXJjbGV7ZmlsbDojOTU3ZGFkfTwvc3R5bGU+PC9oZWFkPjxib2R5Pjxzdmcgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwdmgiPjwvc3ZnPjxkaXYgY2xhc3M9InRvb2x0aXAiIGlkPSJ0b29sdGlwIj48L2Rpdj48c2NyaXB0IHNyYz0iaHR0cHM6Ly9kM2pzLm9yZy9kMy52Ny5taW4uanMiPjwvc2NyaXB0PjxzY3JpcHQ+Y29uc3Qgbm9kZXM9W3tpZDoiWW91Iixncm91cDowfSx7aWQ6IlBMIixncm91cDoxLGxhYmVsOiJXcml0aW5nIHdpdGggTS4ifSx7aWQ6IkFKIixncm91cDoxLGxhYmVsOiJEZXNpZ24gd2l0aCBSb2UifSx7aWQ6IkJPIixncm91cDoxLGxhYmVsOiJBbXkncyBTdWJzdGFjayJ9LHtpZDoiV0oiLGdyb3VwOjEsbGFiZWw6IkVyaWNhJ3MgTmV3c2xldHRlciJ9LHtpZDoiU3Vic2NyaWJlciBBIixncm91cDoyfSx7aWQ6IlN1YnNjcmliZXIgQiIsZ3JvdXA6Mn0se2lkOiJTdWJzY3JpYmVyIEMiLGdyb3VwOjJ9LHtpZDoiU3Vic2NyaWJlciBEIixncm91cDoyfSx7aWQ6IlJlY29tbWVuZGVyIFgiLGdyb3VwOjN9LHtpZDoiUmVjb21tZW5kZXIgWSIsZ3JvdXA6M31dO2NvbnN0IGxpbmtzPVt7c291cmNlOiJZb3UiLHRhcmdldDoiU3Vic2NyaWJlciBBIn0se3NvdXJjZToiWW91Iix0YXJnZXQ6IlN1YnNjcmliZXIgQiJ9LHtzb3VyY2U6IllvdSIsdGFyZ2V0OiJTdWJzY3JpYmVyIEMifSx7c291cmNlOiJZb3UiLHRhcmdldDoiU3Vic2NyaWJlciBEIn0se3NvdXJjZToiU3Vic2NyaWJlciBBIix0YXJnZXQ6IlBMIH0se3NvdXJjZToiU3Vic2NyaWJlciBCIix0YXJnZXQ6IkFKIn0se3NvdXJjZToiU3Vic2NyaWJlciBDIix0YXJnZXQ6IkJPIn0se3NvdXJjZToiU3Vic2NyaWJlciBEIix0YXJnZXQ6IldKIn0se3NvdXJjZToiUmVjb21tZW5kZXIgWCIsdGFyZ2V0OiJZb3UifSx7c291cmNlOiJSZWNvbW1lbmRlciBZIix0YXJnZXQ6IllvdSJ9XTtjb25zdCBzdmc9ZDMuc2VsZWN0KCJzdmciKSx3aWR0aD13aW5kb3cuaW5uZXJXaWR0aCxoZWlnaHQ9d2luZG93LmlubmVySGVpZ2h0O2NvbnN0IHRvb2x0aXA9ZDMuc2VsZWN0KCIjdG9vbHRpcCIpO2NvbnN0IHNpbXVsYXRpb249ZDMuZm9yY2VTaW11bGF0aW9uKG5vZGVzKS5mb3JjZSgibGluayIsZDMuZm9yY2VMaW5rKGxpbmtzKS5pZChkPT5kLmlkKS5kaXN0YW5jZSgyMDApKS5mb3JjZSgiY2hhcmdlIixkMy5mb3JjZU1hbnlCb2R5KCkuc3RyZW5ndGgoLTYwMCkpLmZvcmNlKCJjZW50ZXIiLGQzLmZvcmNlQ2VudGVyKHdpZHRoLzIsaGVpZ2h0LzIpKTtjb25zdCBsaW5rPXN2Zy5hcHBlbmQoImciKS5hdHRyKCJzdHJva2UiLCIjYWFhIikuYXR0cigic3Ryb2tlLW9wYWNpdHkiLDAuNikuYXR0cigic3Ryb2tlLXdpZHRoIiwxKS5zZWxlY3RBbGwoImxpbmUiKS5kYXRhKGxpbmtzKS5qb2luKCJsaW5lIikuYXR0cigiY2xhc3MiLCJsaW5rIik7Y29uc3Qgbm9kZT1zdmcuYXBwZW5kKCJnIikuYXR0cigic3Ryb2tlIiwiI2ZmZiIpLmF0dHIoInN0cm9rZS13aWR0aCIsMS41KS5zZWxlY3RBbGwoImciKS5kYXRhKG5vZGVzKS5qb2luKCJnIikuYXR0cigiY2xhc3MiLGQ9PmBub2RlIGdyb3VwLSR7ZC5ncm91cH1gKS5jYWxsKGQzLmRyYWcoKS5vbigic3RhcnQiLGRyYWdzdGFydGVkKS5vbigiZHJhZyIsZHJhZ2dlZCkub24oImVuZCIsZHJhZ2VuZGVkKSk7bm9kZS5hcHBlbmQoImNpcmNsZSIpLmF0dHIoInIiLDQwKTtub2RlLmFwcGVuZCgidGV4dCIpLmF0dHIoImR5IiwwKS50ZXh0KGQ9PmQubGFiZWx8fGQuaWQpO25vZGUub24oIm1vdXNlb3ZlciIsKGV2ZW50LGQpPT57bGV0IHRvb2x0aXBUZXh0PSIiO2lmKGQuZ3JvdXA9PTIpe3Rvb2x0aXBUZXh0PWA8c3Ryb25nPiR7ZC5pZH08L3N0cm9uZz48YnI+Rm9sbG93aW5nIGZvciA1IG1vbnRoc2A7fWVsc2UgaWYoZC5ncm91cD09MSl7dG9vbHRpcFRleHQ9YDxzdHJvbmc+JHtkLmxhYmVsfHxkLmlkfTwvc3Ryb25nPjxicj4xMCBzdWJzY3JpYmVycyBhbHNvIGZvbGxvdyB0aGlzYDt9ZWxzZSBpZihkLmdyb3VwPT0zKXt0b29sdGlwVGV4dD1gPHN0cm9uZz4ke2QuaWR9PC9zdHJvbmc+PGJyPlRoaXMgcGVyc29uIHJlY29tbWVuZGVkIDIgcmVhZGVyc2A7fWVsc2V7dG9vbHRpcFRleHQ9YDxzdHJvbmc+JHtkLmlkfTwvc3Ryb25nPjxicj5Hcm91cDogJHtkLmdyb3VwfWAgO310b29sdGlwLnN0eWxlKCJvcGFjaXR5IiwxKS5odG1sKHRvb2x0aXBUZXh0KTt9KS5vbigibW91c2Vtb3ZlIiwoZXZlbnQpPT57dG9vbHRpcC5zdHlsZSgibGVmdCIsKGV2ZW50LnBhZ2VYKzEwKSsicHgiKS5zdHlsZSgidG9wIiwoZXZlbnQucGFnZVkrMTApKyJweCIpO30pLm9uKCJtb3VzZW91dCIsKCk9Pnt0b29sdGlwLnN0eWxlKCJvcGFjaXR5IiwwKTt9KTtzaW11bGF0aW9uLm9uKCJ0aWNrIiwoKT0+e2xpbmsuYXR0cigieDEiLGQ9PmQuc291cmNlLngpLmF0dHIoInkxIixkPT5kLnNvdXJjZS55KS5hdHRyKCJ4MiIsZD0+ZC50YXJnZXQueCkuYXR0cigieTIiLGQ9PmQudGFyZ2V0LnkpO25vZGUuYXR0cigidHJhbnNmb3JtIixkPT5gdHJhbnNsYXRlKCR7ZC54fSwke2QueX0pYCk7fSk7ZnVuY3Rpb24gZHJhZ3N0YXJ0ZWQoZXZlbnQsZCl7aWYoIWV2ZW50LmFjdGl2ZSlzaW11bGF0aW9uLmFscGhhVGFyZ2V0KDAuMykucmVzdGFydCgpO2QuZng9ZC54O2QuZnk9ZC55O31mdW5jdGlvbiBkcmFnZ2VkKGV2ZW50LGQpe2QuZng9ZXZlbnQueDtkLmZ5PWV2ZW50Lnk7fWZ1bmN0aW9uIGRyYWdlbmRlZChldmVudCxkKXtpZighZXZlbnQuYWN0aXZlKXNpbXVsYXRpb24uYWxwaGFUYXJnZXQoMCk7ZC5meD1udWxsO2QuZnk9bnVsbDt9PC9zY3JpcHQ+PC9ib2R5PjwvaHRtbD4=" width="100%" height="600px" frameborder="0"></iframe>

## Marketing Mockups

## Style Guide

![Style Guide](/static/1.%20Style%20Guide.png) 
