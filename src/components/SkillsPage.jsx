import SkillList from "./SkillList";

function SkillsPage() {
  return (
    <div>
      <div className="languages-container">
        <h3 className="langs-title">LANGUAGES</h3>
        <SkillList type="languages" />
      </div>
      <div className="frameworks-container">
        <h3 className="fws-title">FRAMEWORKS</h3>
        <SkillList type="fworks" />
      </div>
    </div>
  );
}

export default SkillsPage;