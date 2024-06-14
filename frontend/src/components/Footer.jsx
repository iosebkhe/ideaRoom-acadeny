import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <img src="/logo.png" alt="" />
          <p className={styles.company}>
            <span className={styles.companyTitle}>Academy Of IdeaRoom</span>
            <span className={styles.companyTitle}>იდეარუმის აკადემია</span>
          </p>
          <p className={styles.copyright}>&copy; 2024. საქართველო, ქუთაისი | ყველა უფლება დაცულია</p>
          <ul className={styles.socialList}>
            <li className={styles.socialItem}>
              <a className={styles.socialLink} href="https://www.facebook.com/IdeaRoom.Ge" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M13.5 9V7.21406C13.5 6.40781 13.6781 6 14.9297 6H16.5V3H13.8797C10.6688 3 9.60938 4.47188 9.60938 6.99844V9H7.5V12H9.60938V21H13.5V12H16.1437L16.5 9H13.5Z" fill="#282525" />
                </svg>
              </a>
            </li>
            <li className={styles.socialItem}>
              <a className={styles.socialLink} href="https://www.youtube.com/@idearoom5058" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M21.8715 7.53282C21.8715 5.65787 20.5784 4.14958 18.9805 4.14958C16.8162 4.04167 14.6089 4 12.3531 4H11.6499C9.39961 4 7.18839 4.04167 5.02406 4.15C3.43011 4.15 2.13697 5.66662 2.13697 7.54157C2.03931 9.02445 1.99789 10.5077 2.00024 11.991C1.99633 13.4743 2.04061 14.959 2.13307 16.4451C2.13307 18.32 3.4262 19.8408 5.02015 19.8408C7.29387 19.9533 9.6262 20.0033 11.9976 19.9991C14.3729 20.0075 16.6987 19.9547 18.975 19.8408C20.5729 19.8408 21.866 18.32 21.866 16.4451C21.9598 14.9576 22.0028 13.4743 21.9989 11.9869C22.0077 10.5036 21.9653 9.01889 21.8715 7.53282ZM10.0872 16.0784V7.89114L15.752 11.9827L10.0872 16.0784Z" fill="#282525" />
                </svg>
              </a>
            </li>
            <li className={styles.socialItem}>
              <a className={styles.socialLink} href="https://www.instagram.com/idearoom.ge/" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <g clipPath="url(#clip0_179_485)">
                    <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" fill="#282525" />
                  </g>
                  <defs>
                    <clipPath id="clip0_179_485">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </li>
            <li className={styles.socialItem}>
              <a className={styles.socialLink} href="https://www.linkedin.com/company/idearoom.ge/" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M3.22826 8.85461H7.08587V21H3.22826V8.85461ZM5.18289 3C3.86259 3 3 3.90685 3 5.09712C3 6.26292 3.83734 7.19613 5.1324 7.19613H5.157C6.50254 7.19613 7.34049 6.26287 7.34049 5.09712C7.31524 3.90685 6.50259 3 5.18289 3ZM16.5574 8.5693C14.5097 8.5693 13.5924 9.74765 13.0806 10.574V8.85461H9.22183C9.27291 9.99399 9.22183 21 9.22183 21H13.0806V14.2172C13.0806 13.8539 13.1058 13.4919 13.2074 13.2317C13.4868 12.5065 14.1216 11.7555 15.1866 11.7555C16.5838 11.7555 17.1418 12.8698 17.1418 14.5017V21H21V14.0356C21 10.3051 19.0971 8.5693 16.5574 8.5693Z" fill="#282525" />
                </svg>
              </a>
            </li>
          </ul>
          <Link to="/privacy-policy" className={styles.privacyPolicy}>წესები და პირობები</Link>
        </div>
      </div>
    </footer>
  );
}