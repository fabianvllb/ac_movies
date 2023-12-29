import TopNavBar from '../ui/TopNavbar';

export default function Layout({ children }) {
  return (
    <div >
      <div >
        <TopNavBar />
      </div>
      <div >{children}</div>
    </div>
  );
}