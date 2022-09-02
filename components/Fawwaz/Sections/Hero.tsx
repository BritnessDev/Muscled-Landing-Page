import { FC } from "react";

import { Section } from "."
import { Input } from "../Form";
import Button from "../Button";
import { HeroSectionProps } from "../component.type";
import { useRouter } from "next/router";

const Hero: FC<HeroSectionProps> = ({ title, description, heroSVG, input }) => {
	const router =useRouter()
	return (
		<Section className="py-24 flex flex-wrap h-auto mx-auto justify-center items-center space-y-24 lg:space-y-0 gap-4 lg:justify-between">
			<div className="max-w-[640px]">
				{/* //? Pagination -- this should be dynamic? */}
				<p className="text-white text-lg font-medium space-x-2 cursor-pointer">
					<span>Home {router.asPath.replace('/', ' > ')}</span>
				</p>

				<h1 className="text-[36px] leading-normal lg:text-[56px] lg:leading-72 text-white mt-8 mb-5">
					{title}
				</h1>

				<p className="text-white-70 leading-8 mb-8">
					{description}
				</p>

				{input && 
				
				<div className="flex flex-wrap gap-2">
					<Input
						type="text"
						placeholder="Enter Your Website Link"
						className="text-sm flex-1 md:text-lg"
					/>
					<Button bgColor="bg-black" textColor="text-white">
						<span className="text-sm md:text-lg">
							Send Proposal
						</span>
					</Button>
				</div>
				}

			</div>

			<div className="max-w-[560px] w-full flex items-end flex-col">
				<div className="w-4/5 mt-3 bg-black flex items-center p-2">
					<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M8 11H72L48 43H32L8 11Z" fill="url(#paint0_linear_2_7908)"/>
						<path d="M32 43H48V67L32 73V43Z" fill="url(#paint1_linear_2_7908)"/>
						<path d="M8 7H72V11H8V7Z" fill="url(#paint2_linear_2_7908)"/>
						<path d="M59 40C59 51.0457 50.0457 60 39 60C27.9543 60 19 51.0457 19 40C19 28.9543 27.9543 20 39 20C50.0457 20 59 28.9543 59 40Z" fill="url(#paint3_linear_2_7908)"/>
						<path d="M38.6482 51H40.4014L40.4097 49.1215C43.9574 48.8672 45.9917 46.9312 46 44.1832C45.9917 41.2711 43.5687 39.9422 41.0216 39.3434L40.4758 39.2039L40.5089 34.5199C41.8321 34.7496 42.6838 35.5371 42.8162 36.7184H45.7684C45.7188 34.1098 43.6514 32.2066 40.5254 31.9113L40.5337 30H38.7805L38.7723 31.9113C35.6711 32.223 33.4383 34.1098 33.4466 36.825C33.4466 39.2367 35.1749 40.623 37.9618 41.3367L38.7061 41.5254L38.673 46.4883C37.1927 46.2586 36.126 45.4219 36.0184 43.9371H33C33.1158 47.0133 35.2494 48.8426 38.6565 49.1215L38.6482 51ZM40.4262 46.4883L40.4593 41.9848C41.9644 42.4195 42.9237 42.9937 42.9319 44.1586C42.9237 45.3727 41.9396 46.2422 40.4262 46.4883ZM38.7226 38.7609C37.5814 38.4 36.5394 37.8012 36.556 36.6363C36.5642 35.5781 37.3664 34.7578 38.7557 34.5199L38.7226 38.7609Z" fill="white"/>
						<defs>
						<linearGradient id="paint0_linear_2_7908" x1="62.8" y1="8.42857" x2="49.8431" y2="43.7533" gradientUnits="userSpaceOnUse">
						<stop stop-color="#C40000"/>
						<stop offset="1" stop-color="#FF7262"/>
						</linearGradient>
						<linearGradient id="paint1_linear_2_7908" x1="45.7" y1="41.4732" x2="33.9144" y2="55.0022" gradientUnits="userSpaceOnUse">
						<stop stop-color="#C40000"/>
						<stop offset="1" stop-color="#FF7262"/>
						</linearGradient>
						<linearGradient id="paint2_linear_2_7908" x1="62.8" y1="6.67857" x2="62.5708" y2="11.6777" gradientUnits="userSpaceOnUse">
						<stop stop-color="#C40000"/>
						<stop offset="1" stop-color="#FF7262"/>
						</linearGradient>
						<linearGradient id="paint3_linear_2_7908" x1="43.6667" y1="33.3333" x2="76.3333" y2="-1.33333" gradientUnits="userSpaceOnUse">
						<stop stop-color="#FF7262"/>
						<stop offset="1" stop-color="#C40000"/>
						</linearGradient>
						</defs>
					</svg>

					<div className="text-white">
						<p>
							Access the data-fueled plans behind
						</p>
						<h3 className="text-white text-3xl">$3,021,182,299</h3>
						<p>IN CLIENT REVENUE</p>
					</div>
				</div>

				<div className="w-4/5 mt-3 bg-black flex items-center p-2">
					<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g clip-path="url(#clip0_2_7914)">
					<path d="M1 56.7699C1 49.4325 6.94811 43.4844 14.2855 43.4844H28.7787C36.1161 43.4844 42.0642 49.4325 42.0642 56.7699H1Z" fill="url(#paint0_linear_2_7914)" fill-opacity="0.96"/>
					<path d="M12.7068 21.6258C12.2568 16.4501 16.3367 12 21.5319 12C26.7272 12 30.8071 16.4502 30.3571 21.6258L29.4063 32.5593C29.0512 36.6438 25.6319 39.7787 21.5319 39.7787C17.432 39.7787 14.0127 36.6438 13.6576 32.5593L12.7068 21.6258Z" fill="url(#paint1_linear_2_7914)" fill-opacity="0.96"/>
					<path d="M41 56.7699C41 49.4325 46.9481 43.4844 54.2855 43.4844H68.7787C76.1161 43.4844 82.0642 49.4325 82.0642 56.7699H41Z" fill="url(#paint2_linear_2_7914)" fill-opacity="0.96"/>
					<path d="M52.7068 21.6258C52.2568 16.4501 56.3367 12 61.5319 12C66.7272 12 70.8071 16.4502 70.3571 21.6258L69.4063 32.5593C69.0512 36.6438 65.6319 39.7787 61.5319 39.7787C57.432 39.7787 54.0127 36.6438 53.6576 32.5593L52.7068 21.6258Z" fill="url(#paint3_linear_2_7914)" fill-opacity="0.96"/>
					<path d="M14.0642 79.7132C14.0642 70.2546 21.7319 62.5869 31.1905 62.5869H49.8737C59.3323 62.5869 67 70.2546 67 79.7132H14.0642Z" fill="url(#paint4_linear_2_7914)"/>
					<path fill-rule="evenodd" clip-rule="evenodd" d="M14.3261 76.7132C15.7445 68.685 22.7554 62.5869 31.1905 62.5869H49.8737C58.3089 62.5869 65.3197 68.685 66.7382 76.7132C66.9103 77.6873 67 78.6898 67 79.7132H14.0642C14.0642 78.6898 14.154 77.6873 14.3261 76.7132ZM14.0642 79.7132V82.7132H67V79.7132H70C70 68.5978 60.9892 59.5869 49.8737 59.5869H31.1905C20.0751 59.5869 11.0642 68.5978 11.0642 79.7132H14.0642Z" fill="white"/>
					<path d="M29.1555 34.4086C28.5753 27.7367 33.8348 22 40.532 22C47.2291 22 52.4886 27.7367 51.9084 34.4087L50.6828 48.503C50.225 53.7684 45.8172 57.8095 40.532 57.8095C35.2467 57.8095 30.8389 53.7684 30.3811 48.503L29.1555 34.4086Z" fill="url(#paint5_linear_2_7914)"/>
					<path fill-rule="evenodd" clip-rule="evenodd" d="M54.8971 34.6685L53.6715 48.7629C53.0789 55.5785 47.3733 60.8095 40.5319 60.8095C33.6906 60.8095 27.985 55.5785 27.3923 48.7629L26.1667 34.6685C25.4341 26.2438 32.0754 19 40.5319 19C48.9885 19 55.6297 26.2438 54.8971 34.6685ZM40.5319 22C33.8348 22 28.5753 27.7367 29.1555 34.4086L30.3811 48.503C30.8389 53.7684 35.2467 57.8095 40.5319 57.8095C45.8171 57.8095 50.225 53.7684 50.6828 48.503L51.9084 34.4087C52.4886 27.7367 47.2291 22 40.5319 22Z" fill="white"/>
					</g>
					<defs>
					<linearGradient id="paint0_linear_2_7914" x1="33.0501" y1="43.0588" x2="29.6531" y2="63.0111" gradientUnits="userSpaceOnUse">
					<stop stop-color="#FF7262"/>
					<stop offset="1" stop-color="#FFBEB7"/>
					</linearGradient>
					<linearGradient id="paint1_linear_2_7914" x1="26.5017" y1="11.1101" x2="5.42869" y2="36.6513" gradientUnits="userSpaceOnUse">
					<stop stop-color="#FF7262"/>
					<stop offset="1" stop-color="#FFCBC6"/>
					</linearGradient>
					<linearGradient id="paint2_linear_2_7914" x1="73.0501" y1="43.0588" x2="69.6531" y2="63.0111" gradientUnits="userSpaceOnUse">
					<stop stop-color="#FF7262"/>
					<stop offset="1" stop-color="#FFD5D0"/>
					</linearGradient>
					<linearGradient id="paint3_linear_2_7914" x1="66.5017" y1="11.1101" x2="45.4287" y2="36.6513" gradientUnits="userSpaceOnUse">
					<stop stop-color="#FF7262"/>
					<stop offset="1" stop-color="#FFD9D5"/>
					</linearGradient>
					<linearGradient id="paint4_linear_2_7914" x1="61.1001" y1="61.2107" x2="56.6435" y2="81.6901" gradientUnits="userSpaceOnUse">
					<stop stop-color="#C40000"/>
					<stop offset="1" stop-color="#FF7262"/>
					</linearGradient>
					<linearGradient id="paint5_linear_2_7914" x1="49.4065" y1="19.1224" x2="27.0139" y2="40.357" gradientUnits="userSpaceOnUse">
					<stop stop-color="#C40000"/>
					<stop offset="1" stop-color="#FF7262"/>
					</linearGradient>
					<clipPath id="clip0_2_7914">
					<rect width="80" height="80" fill="white"/>
					</clipPath>
					</defs>
					</svg>


					<div className="text-white">
						<p>
							Use the expert-led tactics behind
						</p>
						<h3 className="text-white text-3xl">7,839,684</h3>
						<p>IN LEADS FOR OUR CLIENTS</p>
					</div>
				</div>

				<div className="w-4/5 mt-3 bg-black flex items-center p-2">
					<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M71.974 11H61.963V7H76V9C76 13.489 75.6419 20.0178 73.7203 25.4893C72.7559 28.2356 71.3511 30.8528 69.2743 32.8002C67.1516 34.7905 64.4086 36 61 36V32C63.3692 32 65.14 31.1933 66.5382 29.8823C67.9822 28.5283 69.1053 26.5587 69.9463 24.1639C71.3906 20.0514 71.8664 15.0908 71.974 11Z" fill="#FF7262"/>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M6.02595 11H16.037V7H2V9C2 13.489 2.35807 20.0178 4.27966 25.4893C5.24415 28.2356 6.6489 30.8528 8.72573 32.8002C10.8484 34.7905 13.5914 36 17 36V32C14.6308 32 12.86 31.1933 11.4618 29.8823C10.0178 28.5283 8.89474 26.5587 8.05368 24.1639C6.60937 20.0514 6.13362 15.0908 6.02595 11Z" fill="#FF7262"/>
						<path d="M31 58H48V61H31V58Z" fill="#FF7262"/>
						<path d="M25 77H54V80H25V77Z" fill="#C40000"/>
						<path d="M34.4694 61H44.5306C44.5306 66.0733 46.7663 70.8888 50.6417 74.1628L54 77H25L28.3583 74.1628C32.2337 70.8888 34.4694 66.0733 34.4694 61Z" fill="url(#paint0_linear_2_7928)"/>
						<path d="M16 0H64V27.3584C64 38.7337 57.4854 49.3192 46.6674 56.1423C42.7401 58.6192 37.2599 58.6192 33.3326 56.1423C22.5146 49.3192 16 38.7337 16 27.3584V0Z" fill="url(#paint1_linear_2_7928)"/>
						<path d="M38.5489 11.9273C38.8483 11.006 40.1517 11.006 40.451 11.9273L42.9799 19.7105C43.1138 20.1225 43.4978 20.4014 43.931 20.4014H52.1147C53.0834 20.4014 53.4862 21.6411 52.7025 22.2105L46.0817 27.0207C45.7312 27.2754 45.5846 27.7267 45.7185 28.1388L48.2474 35.9219C48.5467 36.8433 47.4922 37.6094 46.7085 37.04L40.0878 32.2297C39.7373 31.9751 39.2627 31.9751 38.9122 32.2297L32.2914 37.04C31.5077 37.6094 30.4532 36.8433 30.7526 35.9219L33.2815 28.1388C33.4153 27.7267 33.2687 27.2754 32.9182 27.0207L26.2974 22.2105C25.5137 21.6411 25.9165 20.4014 26.8852 20.4014H35.0689C35.5022 20.4014 35.8861 20.1225 36.02 19.7105L38.5489 11.9273Z" fill="#FFBAB3"/>
						<defs>
						<linearGradient id="paint0_linear_2_7928" x1="49.8313" y1="59.9048" x2="44.5719" y2="75.1603" gradientUnits="userSpaceOnUse">
						<stop stop-color="#C40000"/>
						<stop offset="1" stop-color="#FF7262"/>
						</linearGradient>
						<linearGradient id="paint1_linear_2_7928" x1="57.1" y1="-3.96993" x2="27.3455" y2="35.4378" gradientUnits="userSpaceOnUse">
						<stop stop-color="#C40000"/>
						<stop offset="1" stop-color="#FF7262"/>
						</linearGradient>
						</defs>
					</svg>

					<div className="text-white">
						<p>
							Unlock do-it-for-me marketing with
						</p>
						<h3 className="text-white text-3xl">450</h3>
						<p>DIGITAL MARKETING EXPERTS</p>
					</div>
				</div>

				<div className="w-4/5 mt-3 bg-black flex items-center p-2">
					<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M14 39.9451C13.6717 39.9814 13.338 40 13 40C8.02944 40 4 35.9706 4 31C4 26.4457 7.38285 22.6814 11.7729 22.083C11.2707 20.4779 11 18.7706 11 17C11 7.61116 18.6112 0 28 0C32.7576 0 37.0587 1.95435 40.1444 5.10402C41.7863 4.39368 43.5972 4 45.5 4C52.405 4 58.0992 9.18405 58.9029 15.8724C60.3258 15.3094 61.8768 15 63.5 15C70.4036 15 76 20.5964 76 27.5C76 34.4036 70.4036 40 63.5 40C63.3325 40 63.1659 39.9967 63 39.9902V40H14V39.9451Z" fill="url(#paint0_linear_2_7936)"/>
					<path fill-rule="evenodd" clip-rule="evenodd" d="M19.5 31C20.6046 31 21.5 31.8954 21.5 33V58C21.5 59.1046 20.6046 60 19.5 60H8.5C7.39543 60 6.5 59.1046 6.5 58C6.5 56.8954 7.39543 56 8.5 56H17.5V33C17.5 31.8954 18.3954 31 19.5 31Z" fill="url(#paint1_linear_2_7936)" fill-opacity="0.96"/>
					<path d="M13 58C13 60.2091 11.2091 62 9 62C6.79086 62 5 60.2091 5 58C5 55.7909 6.79086 54 9 54C11.2091 54 13 55.7909 13 58Z" fill="white"/>
					<path fill-rule="evenodd" clip-rule="evenodd" d="M9 56C7.89543 56 7 56.8954 7 58C7 59.1046 7.89543 60 9 60C10.1046 60 11 59.1046 11 58C11 56.8954 10.1046 56 9 56ZM3 58C3 54.6863 5.68629 52 9 52C12.3137 52 15 54.6863 15 58C15 61.3137 12.3137 64 9 64C5.68629 64 3 61.3137 3 58Z" fill="url(#paint2_linear_2_7936)" fill-opacity="0.96"/>
					<path fill-rule="evenodd" clip-rule="evenodd" d="M34.5 25C35.6046 25 36.5 25.8954 36.5 27V72C36.5 73.1046 35.6046 74 34.5 74H23.5C22.3954 74 21.5 73.1046 21.5 72C21.5 70.8954 22.3954 70 23.5 70H32.5V27C32.5 25.8954 33.3954 25 34.5 25Z" fill="url(#paint3_linear_2_7936)" fill-opacity="0.96"/>
					<path d="M28 72C28 74.2091 26.2091 76 24 76C21.7909 76 20 74.2091 20 72C20 69.7909 21.7909 68 24 68C26.2091 68 28 69.7909 28 72Z" fill="white"/>
					<path fill-rule="evenodd" clip-rule="evenodd" d="M24 70C22.8954 70 22 70.8954 22 72C22 73.1046 22.8954 74 24 74C25.1046 74 26 73.1046 26 72C26 70.8954 25.1046 70 24 70ZM18 72C18 68.6863 20.6863 66 24 66C27.3137 66 30 68.6863 30 72C30 75.3137 27.3137 78 24 78C20.6863 78 18 75.3137 18 72Z" fill="url(#paint4_linear_2_7936)" fill-opacity="0.96"/>
					<path fill-rule="evenodd" clip-rule="evenodd" d="M60 34C58.8954 34 58 34.8954 58 36V51C58 52.1046 58.8954 53 60 53H71C72.1046 53 73 52.1046 73 51C73 49.8954 72.1046 49 71 49H62V36C62 34.8954 61.1046 34 60 34Z" fill="url(#paint5_linear_2_7936)" fill-opacity="0.96"/>
					<path d="M66.5 51C66.5 53.2091 68.2909 55 70.5 55C72.7091 55 74.5 53.2091 74.5 51C74.5 48.7909 72.7091 47 70.5 47C68.2909 47 66.5 48.7909 66.5 51Z" fill="white"/>
					<path fill-rule="evenodd" clip-rule="evenodd" d="M70.5 49C71.6046 49 72.5 49.8954 72.5 51C72.5 52.1046 71.6046 53 70.5 53C69.3954 53 68.5 52.1046 68.5 51C68.5 49.8954 69.3954 49 70.5 49ZM76.5 51C76.5 47.6863 73.8137 45 70.5 45C67.1863 45 64.5 47.6863 64.5 51C64.5 54.3137 67.1863 57 70.5 57C73.8137 57 76.5 54.3137 76.5 51Z" fill="url(#paint6_linear_2_7936)" fill-opacity="0.96"/>
					<path fill-rule="evenodd" clip-rule="evenodd" d="M45 21C43.8954 21 43 21.8954 43 23V74C43 75.1046 43.8954 76 45 76H56C57.1046 76 58 75.1046 58 74C58 72.8954 57.1046 72 56 72H47V23C47 21.8954 46.1046 21 45 21Z" fill="url(#paint7_linear_2_7936)" fill-opacity="0.96"/>
					<path d="M51.5 74C51.5 76.2091 53.2909 78 55.5 78C57.7091 78 59.5 76.2091 59.5 74C59.5 71.7909 57.7091 70 55.5 70C53.2909 70 51.5 71.7909 51.5 74Z" fill="white"/>
					<path fill-rule="evenodd" clip-rule="evenodd" d="M55.5 72C56.6046 72 57.5 72.8954 57.5 74C57.5 75.1046 56.6046 76 55.5 76C54.3954 76 53.5 75.1046 53.5 74C53.5 72.8954 54.3954 72 55.5 72ZM61.5 74C61.5 70.6863 58.8137 68 55.5 68C52.1863 68 49.5 70.6863 49.5 74C49.5 77.3137 52.1863 80 55.5 80C58.8137 80 61.5 77.3137 61.5 74Z" fill="url(#paint8_linear_2_7936)" fill-opacity="0.96"/>
					<defs>
					<linearGradient id="paint0_linear_2_7936" x1="65.65" y1="-3.21428" x2="48.1413" y2="39.7466" gradientUnits="userSpaceOnUse">
					<stop stop-color="#C40000"/>
					<stop offset="1" stop-color="#FF7262"/>
					</linearGradient>
					<linearGradient id="paint1_linear_2_7936" x1="18.2073" y1="30.1122" x2="-3.19576" y2="52.1274" gradientUnits="userSpaceOnUse">
					<stop stop-color="#FF7262"/>
					<stop offset="1" stop-color="#FFCBC6"/>
					</linearGradient>
					<linearGradient id="paint2_linear_2_7936" x1="12.3659" y1="51.6327" x2="5.25364" y2="65.7761" gradientUnits="userSpaceOnUse">
					<stop stop-color="#FF7262"/>
					<stop offset="1" stop-color="#FFE0DC"/>
					</linearGradient>
					<linearGradient id="paint3_linear_2_7936" x1="33.2073" y1="23.5" x2="1.06952" y2="43.0642" gradientUnits="userSpaceOnUse">
					<stop stop-color="#FF7262"/>
					<stop offset="1" stop-color="#FFBDB6"/>
					</linearGradient>
					<linearGradient id="paint4_linear_2_7936" x1="27.3659" y1="65.6327" x2="20.2536" y2="79.7761" gradientUnits="userSpaceOnUse">
					<stop stop-color="#FF7262"/>
					<stop offset="1" stop-color="#FFCCC7"/>
					</linearGradient>
					<linearGradient id="paint5_linear_2_7936" x1="61.2927" y1="33.4184" x2="74.0057" y2="53.3773" gradientUnits="userSpaceOnUse">
					<stop stop-color="#FF7262"/>
					<stop offset="1" stop-color="#FFC2BB"/>
					</linearGradient>
					<linearGradient id="paint6_linear_2_7936" x1="67.1341" y1="44.6327" x2="74.2464" y2="58.7761" gradientUnits="userSpaceOnUse">
					<stop stop-color="#FF7262"/>
					<stop offset="1" stop-color="#FFC1BA"/>
					</linearGradient>
					<linearGradient id="paint7_linear_2_7936" x1="46.2927" y1="19.3163" x2="80.3289" y2="37.7759" gradientUnits="userSpaceOnUse">
					<stop stop-color="#FF7262"/>
					<stop offset="1" stop-color="#FFBAB3"/>
					</linearGradient>
					<linearGradient id="paint8_linear_2_7936" x1="52.1341" y1="67.6327" x2="59.2464" y2="81.7761" gradientUnits="userSpaceOnUse">
					<stop stop-color="#FF7262"/>
					<stop offset="1" stop-color="#FFD4CF"/>
					</linearGradient>
					</defs>
					</svg>
					
					<div className="text-white">
						<p>
							Accelerate ROI with
						</p>
						<h3 className="text-white text-3xl">1+ BILLION</h3>
						<p>DATA POINTS FROM MARKETINGCLOUDFX</p>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default Hero;
