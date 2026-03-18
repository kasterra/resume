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
  siNextdotjs,
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
              변화가 반복되는 환경에서 경계를 설계하여 시스템을 안정화하는
              엔지니어
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
            단순 UI 구현을 넘어, 콘텐츠 작성 파이프라인·플랫폼 간 통신·도메인
            경계 정의 등 복잡한 흐름을 사람이 다룰 수 있는 구조로
            정리해왔습니다.사용자 경험과 팀 협업을 함께 고려하며, 표현 계층과
            상태 계층을 분리하고 변경 비용을 낮추는 구조 설계를 지향합니다.
          </p>
          <blockquote className="border-l-4 border-gray-300 pl-4 mt-4 italic text-gray-600">
            "디자인적 실험과 개선이 자유롭게 이루어질 수 있었던 협업이었다" —
            협업 디자이너 피드백
          </blockquote>
        </div>
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
                  aria-label="Next.js"
                >
                  <path d={siNextdotjs.path} fill={`#${siNextdotjs.hex}`} />
                </svg>
                Next.js
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
            title="틸다"
            position="Front-end Engineer Intern"
            period="2026.01 ~ "
            descriptions={[
              "AI 시각화 서비스 백오피스 FE 개발 담당",
              "서비스 접근성 및 사용성 개선: form 구조·데이터 흐름 재정비 및 UI 접근성 개선 구현",
              {
                content:
                  "→ 해당 개선을 통해 한국 ICT 임팩트협회 사회적가치 AI 인증 획득에 기여",
                bullet: false,
                indent: "sm",
              },
              "Release Note 시스템 구현: TipTap 기반 에디터 및 백오피스 작성 기능 개발",
              "DX 개선: 선언형 유틸 패턴을 코드베이스에 내재화하고 TypeScript 타입 구조 개선",
            ]}
          />

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
            period="2020.12 ~"
            descriptions={[
              "누적 노출수 33.9만, 클릭수 2.26만 달성",
              "단순 구현 기록을 넘어, 도구·아키텍처 선택 배경과 설계 판단을 정리하는 기술 글 작성",
              "대표 글: Yarn Berry로 React.js 프로젝트 시작하기 (조회수 4900+회, 부스트컨퍼런스 발표 주제)",
              "React-beautiful-dnd 튜토리얼 해설 (조회수 2000+)",
              "정규표현식 튜토리얼: 패턴 설계와 문제 해결 관점 정리 (조회수 1400+)",
            ]}
          />
          <ExperienceItem
            title="부스트캠프 커피챗 호스트 — 의사결정 프레임 기반 멘토링"
            period="2026.02 ~ 2026.03"
            descriptions={[
              "부스트캠프 수료생 대상 커피챗 호스트로 배정되어 사전 질문 수집 → 답변 문서화 → 1:1 상담 진행의 구조화된 세션 설계",
              "단순 조언이 아닌, 커리어 의사결정 기준(스트레스 내성·역할 범위·리스크 인지 등)을 정리하여 스스로 판단할 수 있는 프레임 제공",
              <>
                참가자 후기 확보 및 회고 글 작성으로 지식 공유 확장.{" "}
                <a
                  href="https://kasterra.github.io/boostcamp-coffeechat-host/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  후기/회고 글
                  <ExternalLinkIcon size={14} className="inline ml-1" />
                </a>
              </>,
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
