import {
  ExternalLinkIcon,
  FileTextIcon,
  BriefcaseIcon,
  GraduationCapIcon,
  ActivityIcon,
  UserIcon,
  Code2Icon,
  AtomIcon,
  ServerIcon,
} from "lucide-react";
import { ResumeSection } from "./ResumeSection";
import { ExperienceItem } from "./ExperienceItem";
import {
  siNodedotjs,
  siExpress,
  siDocker,
  siTypescript,
  siReact,
} from "simple-icons/icons";

/** 인쇄 시 Chrome으로 인쇄하시오 */

export function Resume() {
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-8 bg-white shadow-lg my-8 print:shadow-none print:my-0">
      {/* Header */}
      <header className="border-b border-gray-200 pb-6 mb-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end print:flex-row print:justify-between print:items-end">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              이휘찬 이력서
            </h1>
            <p className="text-lg text-gray-600 mt-1">
              🙌 함께 잘하기 위해 고민하는 개발자
            </p>
          </div>
          <a
            href="https://kasterra.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-0 print:mt-0 flex items-center text-blue-600 hover:text-blue-800"
          >
            <span>kasterra.dev</span>
            <ExternalLinkIcon size={16} className="ml-1" />
          </a>
        </div>
      </header>
      {/* Introduction with Title */}
      <ResumeSection title="자기소개" icon={<UserIcon size={20} />}>
        <div className="text-gray-700 leading-relaxed space-y-2">
          <p>
            사용자의 입장과 팀 협업을 함께 고려하며 제약 속에서도 최선의 UX를
            구현해왔습니다. 화면을 그리는 데 그치지 않고 서비스 전반의 흐름과
            운영 관점까지 이해하며, 필요한 경우 배포 환경 구성이나 서버 연동
            구조도 직접 다뤄왔습니다.
          </p>
          <p>
            또한, 열린 태도와 지식 공유로 팀과 함께 성장하는 개발자를 지향하며,
            기술 블로그를 통해 꾸준히 기록하고 나눔을 실천합니다. 이런 협업
            방식에 대해 동료 디자이너는 이렇게 피드백했습니다.
          </p>
        </div>
        <blockquote className="border-l-4 border-gray-300 pl-4 mt-4 italic text-gray-600">
          "디자인적 실험과 개선이 자유롭게 이루어질 수 있었던 협업이었다" — 협업
          디자이너 피드백
        </blockquote>
      </ResumeSection>
      {/* Tech Stack (categorized) */}
      <ResumeSection title="기술 스택" icon={<Code2Icon size={20} />}>
        <div className="grid grid-cols-1 gap-6 print:break-inside-avoid">
          {/* Frontend & Hybrid App */}
          <div>
            <div className="flex items-center mb-2">
              <AtomIcon size={18} className="text-gray-600 mr-2" />
              <h3 className="font-semibold text-gray-800">
                Frontend & Hybrid App
              </h3>
            </div>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-label="React"
                >
                  <path d={siReact.path} fill={`#${siReact.hex}`} />
                </svg>
                React
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-label="TypeScript"
                >
                  <path d={siTypescript.path} fill={`#${siTypescript.hex}`} />
                </svg>
                TypeScript
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-label="React Native"
                >
                  <path d={siReact.path} fill="#7C3AED" />
                </svg>
                React Native
              </li>
            </ul>
          </div>
          {/* Backend / Infra */}
          <div>
            <div className="flex items-center mb-2">
              <ServerIcon size={18} className="text-gray-600 mr-2" />
              <h3 className="font-semibold text-gray-800">Backend / Infra</h3>
            </div>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-label="Node.js"
                >
                  <path d={siNodedotjs.path} fill={`#${siNodedotjs.hex}`} />
                </svg>
                Node.js
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-label="Express"
                >
                  <path d={siExpress.path} fill={`#${siExpress.hex}`} />
                </svg>
                Express
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-label="Docker"
                >
                  <path d={siDocker.path} fill={`#${siDocker.hex}`} />
                </svg>
                Docker
              </li>
            </ul>
          </div>
        </div>
      </ResumeSection>
      {/* Work Experience */}
      <div>
        <ResumeSection title="경력" icon={<BriefcaseIcon size={20} />}>
          <ExperienceItem
            title="창톡"
            position="Front-end Engineer"
            period="2025.04 ~ 2025.07"
            descriptions={[
              "신규 프로젝트 및 레거시 상담 앱 유지보수 담당",
              <>
                React Native ↔ 웹뷰 통신 프로토콜 설계: 메시지 라우터 구조 설계
                및 hook 기반 핸들러 도입으로 안정적 제어와 메모리 최적화.{" "}
                <a
                  href="https://kasterra.github.io/rn-with-webview-3-webside/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  관련 블로그
                  <ExternalLinkIcon size={14} className="inline ml-1" />
                </a>
              </>,
              "레거시 서비스 유지보수: 미성년자 가입 제한 이슈 해결, Xcode 설정 수정으로 최신 macOS 환경 빌드 문제 해결",
              "공통 UI 라이브러리 개발: 디자인 시스템 기반 컴포넌트 개발, Storybook 도입, npm private registry 배포,prepublishOnly 스크립트로 안정적 배포",
            ]}
          />

          <ExperienceItem
            title="Flash21"
            position="소프트웨어 개발자"
            period="2024.07 - 2024.12"
            descriptions={[
              "지역사회·공공기관 IT 프로젝트 담당",
              "git patch 개발: 유지보수 중단 라이브러리 수정 및 배포, 신규 인력 환경 설정 시간을 1~2일 → 4시간 으로 단축",
              "웹뷰 컴포넌트 구축: 카카오맵, 주소 입력 웹뷰 구현 및 에러 메시지 정의",
              "사내 인프라 개선: GitLab 서버 구축 및 CI 연동, 인턴 인수인계 시간을 2~3일 → 하루로 단축, 업무 메신저 도입",
              "지식 공유 세션: React Reconciliation 발표 진행",
            ]}
          />
        </ResumeSection>
      </div>
      {/* Key Experiences - add slight top spacing */}
      <div className="mt-4">
        <ResumeSection title="주요 경험" icon={<FileTextIcon size={20} />}>
          <ExperienceItem
            title="기술 블로그 — Kasterra's Archive"
            period="2020.12~"
            descriptions={[
              "누적 노출수 33.9만, 클릭수 2.26만 달성",
              "대표 글: Yarn Berry로 React.js 프로젝트 시작하기 (조회수 4900+회, 부스트컨퍼런스 발표 주제)",
              "React-beautiful-dnd 튜토리얼 해설 (조회수 2000+)",
              "정규표현식 튜토리얼 (조회수 1400+)",
            ]}
          />
          <ExperienceItem
            title="학부연구생 — 경북대 SW 테스팅 연구실"
            period="2023.09 ~ 2024.06"
            descriptions={[
              "Online Judge 개발: UTF-8 인코딩 지원, 특수 유형 문제 대응, 수업자료 복제·제출물 일괄 다운로드 기능 구현\n→ 실제 수업에 활용",
              "서버 인프라 개선: Nginx Reverse Proxy로 도메인 기반 접근, SSH 보안 강화 및 포트 차단 우회 설정",
              "서비스 배포: 연구실에서 개발한 프로젝트를 Docker로 컨테이너화하여 배포 환경 표준화 및 재현성 확보",
            ]}
          />
        </ResumeSection>
      </div>
      {/* Other Activities */}
      <ResumeSection title="기타 활동" icon={<ActivityIcon size={20} />}>
        <ul className="space-y-2 text-gray-700">
          <li>• GDSC KNU 1기: Front-End 스터디 리드 및 CS 발표 세션 주도</li>
          <li>
            • 학부 수업 튜터: 자바프로그래밍, 프로그래밍 기초, 파이썬프로그래밍
            실습 보조
          </li>
          <li>• 정보보안 동아리 KERT: 총무(2023), 부회장(2019)</li>
        </ul>
      </ResumeSection>
      {/* Education */}
      <ResumeSection
        title="학력 및 교육"
        icon={<GraduationCapIcon size={20} />}
      >
        <ul className="space-y-2 text-gray-700">
          <li>• 경북대학교 컴퓨터학부 학사 (2018.03 - 2025.02)</li>
          <li>
            • 네이버 커넥트재단 부스트캠프 웹·모바일 7기 (2022.07 – 2022.12)
          </li>
        </ul>
      </ResumeSection>
      {/* Footer */}
      <footer className="mt-10 pt-6 border-t border-gray-200 text-center text-gray-600">
        <p className="flex items-center justify-center">
          <span>📎 상세 포트폴리오: </span>
          <a
            href="https://kasterra.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 text-blue-600 hover:text-blue-800"
          >
            kasterra.dev
          </a>
        </p>
      </footer>
    </div>
  );
}
