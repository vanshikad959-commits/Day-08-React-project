import { useState, useCallback } from 'react';
import SectionHeader from './SectionHeader.jsx';
import TeamCard from './TeamCard.jsx';
import TeamModal from './TeamModal.jsx';

export default function Team({ members }) {
  // null = modal closed; a member object = modal open for that member
  const [selectedMember, setSelectedMember] = useState(null);

  const closeModal = useCallback(() => setSelectedMember(null), []);

  return (
    <section id="team" className="section team">
      <div className="container">
        <SectionHeader
          eyebrow="Our Team"
          title="The people behind the code"
          subtitle="Click on a team member to see their full profile."
        />

        <div className="grid grid--4">
          {members.map((member) => (
            <TeamCard key={member.id} member={member} onSelect={setSelectedMember} />
          ))}
        </div>
      </div>

      {/* Conditional rendering: the modal exists only while a member is selected */}
      {selectedMember && <TeamModal member={selectedMember} onClose={closeModal} />}
    </section>
  );
}
