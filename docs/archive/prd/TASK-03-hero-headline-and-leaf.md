# TASK-03: Canadian Maple Leaf Vector & Subheading Single-Line

## Overview
1. Replace the generic red-and-white striped national flag icon in the hero headline with the official vectorized Canadian maple leaf from Figma.
2. Remove text wrapping constraints on the hero subtitle so that it remains on a single line on desktop screens.

---

## 1. Canadian Flag Vector Replacement

### Figma Reference
- **Node**: `6062:2847` (`Flag_of_Canada_(Pantone).svg 1 [Vectorized]`)
- **Asset Endpoint**: `http://localhost:3845/assets/559d89a5b108084e0b268cda60685a007326f92c.svg`
- **Dimensions**: `width="45" height="55.8984" viewBox="0 0 45 55.8984"`
- **Fill Color**: `#EF6F68` (matches the coral-red tint of the word "Canadian" in the headline)

### SVG Markup
```xml
<svg width="45" height="56" viewBox="0 0 45 55.8984" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M22.0803 4.7185C22.2782 4.78569 22.8005 6.00407 22.9224 6.24643L24.7461 9.88611C25.145 10.6861 25.7933 11.7597 26.1007 12.5488C27.3425 12.7482 27.6107 12.0033 28.6122 11.5198C29.2332 11.2201 30.0511 10.6126 30.6612 10.3915C30.8764 10.4947 30.6019 11.4712 30.5492 11.7172C29.765 15.376 29.1474 19.0627 28.4289 22.7333C28.3995 22.8838 28.538 23.1479 28.603 23.2817C28.7274 23.3637 29.098 23.5849 29.2146 23.5264C29.6911 23.2874 30.2641 22.5033 30.5887 22.1533L32.8347 19.7596C33.205 19.3629 33.5915 18.9646 33.967 18.5722C34.1861 18.3431 34.3377 18.2613 34.5552 17.9901C34.7326 18.5087 35.7594 20.9827 36.0923 21.2072C36.8196 21.3746 37.8203 20.9622 38.5461 20.8414C39.6346 20.6602 40.7029 20.4199 41.7774 20.1698C42.1399 20.0854 42.4908 20.0448 42.8489 19.9403C42.3325 22.2487 41.1359 24.6542 40.7275 26.9981C40.6347 27.5301 42.9175 28.2801 43.4844 28.7439L43.5023 28.7588C42.5958 29.5388 41.7047 30.2208 40.7882 30.9756C39.3555 32.1751 37.9145 33.3647 36.4654 34.5443L34.149 36.444C33.6115 36.8819 32.6512 37.5028 32.413 38.1348C32.5366 38.6504 32.9068 39.6221 33.0944 40.1272C33.3453 40.8096 33.5874 41.4951 33.8209 42.1836C33.2863 42.0524 32.8685 42.0035 32.3387 41.9042L28.45 41.2148C26.9178 40.9395 25.1681 40.5414 23.6241 40.4364C22.3521 40.4088 22.6495 42.3368 22.7023 43.1285C22.8908 45.951 22.9894 48.8131 23.1634 51.6252C22.7616 51.6388 22.3556 51.63 21.9533 51.6248L21.0639 51.6186C20.9853 50.0159 21.8243 41.5487 21.4106 40.8639C21.2571 40.6098 20.8851 40.4477 20.5985 40.432C19.7654 40.3864 18.8162 40.6923 17.9982 40.8375C17.0475 41.0063 16.0911 41.1539 15.142 41.3302C13.8183 41.576 12.4974 41.848 11.162 42.0101C10.9716 42.0332 10.6193 42.1857 10.4694 42.1515C10.4179 41.9853 11.6978 38.5642 11.8487 38.0756C11.7627 37.8996 11.6617 37.7451 11.5102 37.6177C8.92485 35.4445 6.28141 33.3397 3.68602 31.1772C2.69586 30.3521 1.66417 29.5843 0.693299 28.7305C1.56615 28.1867 2.55633 27.9197 3.35228 27.2992C3.43894 27.2316 3.54679 26.9526 3.51758 26.8414C3.05164 25.0684 2.43773 23.3094 1.88576 21.5572C1.75758 21.1493 1.43889 20.4158 1.41485 20.0384L1.45681 19.9944C2.30078 20.0758 3.16988 20.3951 4.01852 20.5118C4.73673 20.6106 7.64767 21.4385 8.17084 21.1639C8.68359 20.8948 9.21111 18.5295 9.68537 18.0933C10.0049 18.106 13.0948 21.7844 13.6185 22.2129C13.9698 22.5003 14.6228 23.6668 15.2244 23.5011C16.2171 23.2276 15.6738 22.0578 15.5607 21.3784C15.464 20.816 15.3499 20.2442 15.2379 19.678L14.3002 14.8242C14.0481 13.5784 13.7287 11.3709 13.3811 10.2091C13.4165 10.2375 13.6869 10.4586 13.7066 10.4698C14.2665 10.7856 14.8395 11.1085 15.3988 11.4232C15.9837 11.738 16.5219 12.122 17.1152 12.4215C17.9478 12.8418 18.1333 12.5389 18.4827 11.8159C19.3785 9.96214 20.2775 8.11371 21.2621 6.30532C21.5416 5.79199 21.7686 5.20352 22.0803 4.7185Z" fill="#EF6F68"/>
</svg>
```

---

## 2. Subheading Single-Line Layout

### Background & Problem
- In [`src/components/HeroHeadline.tsx`](../../src/components/HeroHeadline.tsx):
  ```tsx
  <p className="font-['Inter_Tight'] font-normal text-[15px] sm:text-[16px] text-[rgba(44,46,48,0.7)] max-w-[760px] tracking-[0.32px] leading-relaxed">
    Generate branded QR codes in seconds, share them with your audience, and instantly track your scan data.
  </p>
  ```
- The constraint `max-w-[760px]` forces the 103-character sentence into two lines.
- In Figma node `6062:2320`, this text is placed in a container with full width (`max-w-[1148px]`), rendering on a single continuous line on desktop.

### Resolution
- Remove `max-w-[760px]`.
- Change to:
  ```tsx
  <p className="font-['Inter_Tight'] font-normal text-[15px] sm:text-[16px] text-[rgba(44,46,48,0.7)] text-center tracking-[0.32px] w-full max-w-none whitespace-normal lg:whitespace-nowrap">
    Generate branded QR codes in seconds, share them with your audience, and instantly track your scan data.
  </p>
  ```

---

## Target File
- [`src/components/HeroHeadline.tsx`](../../src/components/HeroHeadline.tsx)
- [`src/components/icons.tsx`](../../src/components/icons.tsx)

---

## Acceptance Criteria
- [x] Headline contains the exact coral-red Canadian maple leaf silhouette between "The first" and "Canadian".
- [x] Subtitle text is rendered on one single line on desktop (`>= 1024px`).
- [x] Subtitle wraps gracefully without overflow on mobile devices (`< 768px`).
