require 'rails_helper'

describe Review do

  subject { described_class.new }

  context 'when rate range is not valid' do
    it 'should raise error' do
      subject.rate = 6
      expect(subject).to_not be_valid
    end
  end
end
